/// <reference types="cypress" />

describe('API Tests based on UI Tests', () => {
  const apiBase = 'https://mern-t-chat.vercel.app/api'; // Replace with your actual API base URL
  let authToken;
  let createdGroupId;

  // Helper function to login and get the token
  const login = (email, password) => {
    return cy.request({
      method: 'POST',
      url: `${apiBase}`, // Adjust the endpoint if necessary
      body: { email, password },
      failOnStatusCode: false, // To handle unsuccessful login attempts
    }).then((response) => {
      return response; // Return the entire response object
    });
  };


  it.only('POST /user/login - Should fail with invalid credentials', () => {
    login('invalidemail@example.com', 'invalidpassword').then((response) => {
      expect(response.status).to.be.oneOf([400, 401,405]); // Adjust status code based on the API's response
      expect(response.body).to.have.property('message');
    });
  });

  it('POST /user/login - Should succeed with valid credentials', () => {
    login('yassinesoudani1000@gmail.com', 'yassine1000').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('token');
      // Token is already stored in beforeEach for subsequent tests
    });
  });

  it('POST /group - Should create a new group', () => {
    const groupName = 'API Test Group';
    cy.request({
      method: 'POST',
      url: `${apiBase}/group`, // Adjust the endpoint if necessary
      headers: { Authorization: `Bearer ${authToken}` },
      body: {
        name: groupName,
        users: [], // Add user IDs if needed
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('_id');
      expect(response.body.name).to.eq(groupName);
      createdGroupId = response.body._id; // Store the group ID for subsequent tests
    });
  });

  it.only('PUT /group/:id - Should modify the group name', () => {
    const newGroupName = 'API Test Group Modified';
    cy.request({
      method: 'PUT',
      url: `${apiBase}/group/rename`, // Adjust the endpoint if necessary
      headers: { Authorization: `Bearer ${authToken}` },
      body: {
        groupId: createdGroupId,
        groupName: newGroupName
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq(newGroupName);
    });
  });

  it('DELETE /group/:id - Should delete the group', () => {
    cy.request({
      method: 'DELETE',
      url: `${apiBase}/group/${createdGroupId}`, // Adjust the endpoint if necessary
      headers: { Authorization: `Bearer ${authToken}` },
    }).then((response) => {
      expect(response.status).to.be.oneOf([200, 204]);

      // Verify that the group is actually deleted (optional)
      cy.request({
        method: 'GET',
        url: `${apiBase}/group/${createdGroupId}`, // Adjust the endpoint if necessary
        headers: { Authorization: `Bearer ${authToken}` },
        failOnStatusCode: false, // Expecting a 404
      }).then((getResponse) => {
        expect(getResponse.status).to.eq(404);
      });
    });
  });
});