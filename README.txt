Plan de Test : Application MERN T-Chat 

 

1. Test E2E :  

Authentification : 
* Échec de la connexion avec des identifiants invalides. 
* Connexion réussie avec des identifiants valides et redirection vers la page de discussion. 

Gestion des groupes: 
* Création d'un nouveau groupe de discussion. 
* Modification du nom d'un groupe existant.
* Sortir d'un groupe (ce qui, dans ce cas, le supprime de la vue de l'utilisateur). 

2. Test API : 
* Vérifier que la connexion échoue avec des identifiants incorrects (statut HTTP 400/405). 
* Vérifier que la connexion réussit avec des identifiants corrects et renvoie un jeton d'authentification (statut HTTP 200).Vérifier la création réussie d'un groupe avec un nom donné (POST). 
* Vérifier la modification réussie du nom d'un groupe existant (PUT). 
* Vérifier la suppression réussie d'un groupe (DELETE). 

3.Outils Utilisés :  
Framework de Test : Cypress 
Plugin : cypress-xpath 

4.Comment Exécuter les Tests 

Assurez-vous que Node.js et npm (ou yarn) sont installés. 
Clonez le dépôt contenant le code de l'application et les tests. 
npm install cypress cypress-xpath --save-dev 

Ouvrez l'interface de test de Cypress avec la commande : npx cypress open 
Dans le Test Runner, sélectionnez le navigateur de votre choix. 

Cliquez sur le fichier 

Test.cy.js 