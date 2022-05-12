// importer le package HTTP de Node.js pour créer le serveur
const http = require("http");
//console.log("CONTENU: http");
//console.log(http);

// importer l'application app.js
const app = require("./app");

// parametrage du port avec la méthode set de express
app.set("port", process.env.PORT || 3000);

// la méthode createServer prend en argument
// la fonction qui sera appelé à chaque requete recu par le serveur
// ici les fonctions seront dans app.js
const server = http.createServer(app);

// le serveur écoute les requêtes sur le port 
server.listen(process.env.PORT || 3000);
