// importation de express
const express = require("express");

//importation de morgan(logger http)
const morgan = require("morgan");

// importation de connexion de bd
const mongoose = require("./db/db.js");

// importation des routes
const userRoutes = require("./rootes/user" );


// pour créer une application express
const app = express();

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.engine('hbs', require('ejs').renderFile);
app.set('view engine', 'hbs');

app.get('/',(req, res) =>{
    res.render('index.hbs')
});

app.get('/login',(req, res) =>{
    res.render('login.hbs')
});

app.get('/register',(req, res) =>{
    res.render('register.hbs')
});

app.get('/contact',(req, res) =>{
    res.render('contact.hbs')
});

//importation de body-parser
const bodyParser = require("body-parser");
const res = require("express/lib/response");

// logger les  requests et les responses 
app.use(morgan("dev"));

// gérer les pblms de CORS
//(Cross-Origin-Request-Sharing)
//quand on a le front-end sur un serveur
// et le back-end sur un autre
app.use((req,res,next) => {
res.setHeader("Access-Control-Allow-Origin","*");
res.setHeader(
    "Access-Constrol-Allow-Headers",
    "Origin, X-Requested-with, Content, Accept, Content-Type, Authorization"
);
res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
);
next();
});

//tranformer le body en json utilisable
app.use(bodyParser.json());

//la route d'authentification
app.use("/", userRoutes);

// exportation de app.js pour pouvoir y accéder
// depuis un autre fichier
module.exports=app;