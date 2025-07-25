Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});


describe('Test automation for MERN T-Chat application ', () => {
  it('verify that the connection is failed with invalid credentials', () => {
    cy.visit('https://mern-t-chat.vercel.app/',{timeout:10000});
    cy.wait(2000)
    cy.xpath("/html/body/div[1]/div[2]/div/div[2]/div/div[2]/div[1]/div/div[1]/input").type("12132emailTest@gmail.com", {force:true});
    cy.xpath("/html/body/div[1]/div[2]/div/div[2]/div/div[2]/div[1]/div/div[2]/div/input").type("passwordTest", {force:true});
    cy.xpath("/html/body/div[1]/div[2]/div/div[2]/div/div[2]/div[1]/div/button[1]").click({force:true})
    cy.wait(3000)
    cy.get('#toast-1-title').contains("Something went wrong",{timeout:6000})
  });
  it('verify that the connection is successful with valid identifiers', () => {
    cy.visit('https://mern-t-chat.vercel.app/',{timeout:10000});
    cy.wait(2000)
    cy.xpath("/html/body/div[1]/div[2]/div/div[2]/div/div[2]/div[1]/div/div[1]/input").type("yassinesoudani1000@gmail.com", {force:true});
    cy.xpath("/html/body/div[1]/div[2]/div/div[2]/div/div[2]/div[1]/div/div[2]/div/input").type("yassine1000", {force:true});
    cy.xpath("/html/body/div[1]/div[2]/div/div[2]/div/div[2]/div[1]/div/button[1]").click({force:true})
    cy.wait(3000)
    cy.url().should('contains', 'https://mern-t-chat.vercel.app/chats')
    cy.get('#toast-1-title').contains("Login Successful!")
  });
  it('add a group', () => {
    cy.visit('https://mern-t-chat.vercel.app/');
    cy.wait(2000)
    cy.xpath("/html/body/div[1]/div[2]/div/div[2]/div/div[2]/div[1]/div/div[1]/input").type("yassinesoudani1000@gmail.com", {force:true});
    cy.xpath("/html/body/div[1]/div[2]/div/div[2]/div/div[2]/div[1]/div/div[2]/div/input").type("yassine1000", {force:true});
    cy.xpath("/html/body/div[1]/div[2]/div/div[2]/div/div[2]/div[1]/div/button[1]").click({force:true})
    cy.wait(2000)
    // cliquer sur le bouton ajouter un groupe
    cy.xpath("/html/body/div[1]/div[2]/div[2]/div[1]/div[1]/span/button").click({force:true})
    cy.wait(1000)
    cy.xpath("/html/body/div[3]/div[3]/div/section/div/div[1]/input").type("test groupe", {force:true})
    cy.xpath("/html/body/div[3]/div[3]/div/section/div/div[2]/input").type("jo", {force:true})
    cy.wait(2000)
    cy.xpath('/html/body/div[3]/div[3]/div/section/div/div[4]').click({force:true})
    cy.wait(1000)
    cy.xpath('/html/body/div[3]/div[3]/div/section/div/div[5]').click({force:true})
    cy.wait(1000)
    cy.xpath("/html/body/div[3]/div[3]/div/section/footer/button[2]").click({force:true})
    cy.xpath("/html/body/div[2]/ul[5]/li/div/div/div/div").contains("New Group Created!")
    cy.xpath("/html/body/div[1]/div[2]/div[2]/div[1]/div[2]/div/div[1]/p").contains("test groupe")

  });
  it('modify the group name', () => {
    cy.visit('https://mern-t-chat.vercel.app/');
    cy.wait(2000)
    cy.xpath("/html/body/div[1]/div[2]/div/div[2]/div/div[2]/div[1]/div/div[1]/input").type("yassinesoudani1000@gmail.com", {force:true});
    cy.xpath("/html/body/div[1]/div[2]/div/div[2]/div/div[2]/div[1]/div/div[2]/div/input").type("yassine1000", {force:true});
    cy.xpath("/html/body/div[1]/div[2]/div/div[2]/div/div[2]/div[1]/div/button[1]").click({force:true})
    cy.wait(3000)
    cy.url().should('contains','https://mern-t-chat.vercel.app/chats')
    cy.get('.chakra-stack > :nth-child(1) > .chakra-text').click({force:true})
    cy.wait(2000)
    cy.get(".css-125etan > svg:nth-child(3)",{timeout:6000}).click({force:true})
    cy.wait(1000)
    cy.xpath("/html/body/div[3]/div[3]/div/section/div/div[2]/input").clear().type("test groupe modifié", {force:true})
    cy.wait(1000)
    cy.xpath("/html/body/div[3]/div[3]/div/section/div/div[2]/button").click({force:true})
    cy.wait(1000)
    cy.get('.chakra-modal__close-btn').click({force:true})
    cy.wait(1000)
    cy.xpath("/html/body/div[1]/div[2]/div[2]/div[1]/div[2]/div/div[1]/p").contains("test groupe modifié")

  });
  it('delete an element from my cart', () => {
    cy.visit('https://mern-t-chat.vercel.app/');
    cy.wait(2000)
    cy.xpath("/html/body/div[1]/div[2]/div/div[2]/div/div[2]/div[1]/div/div[1]/input").type("yassinesoudani1000@gmail.com", {force:true});
    cy.xpath("/html/body/div[1]/div[2]/div/div[2]/div/div[2]/div[1]/div/div[2]/div/input").type("yassine1000", {force:true});
    cy.xpath("/html/body/div[1]/div[2]/div/div[2]/div/div[2]/div[1]/div/button[1]").click({force:true})
    cy.wait(3000)
    cy.url().should('contains','https://mern-t-chat.vercel.app/chats')
    cy.get('.chakra-stack > :nth-child(1) > .chakra-text').click({force:true})
    cy.wait(2000)
    cy.get(".css-125etan > svg:nth-child(3)",{timeout:6000}).click({force:true})
    cy.wait(1000)
    cy.xpath("/html/body/div[3]/div[3]/div/section/footer/button").click({force:true})
    cy.wait(1000)
    cy.xpath("/html/body/div[1]/div[2]/div[2]/div[2]/div/p").contains("Click on a user to start Chatting.")
  });


});
