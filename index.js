
const PORT = 3501;

const express = require('express');
const path = require('path');



const bettersqlite3 = require('better-sqlite3')


const db = bettersqlite3('./database/cinema5.sqlite3');


// create a web server using express

const app = express();


// serve all the files in the frontend folder

app.use(express.static('frontend'));


// manually hadd the paths to the index.html to handle hard reloads 
app.all("/rRated", (req, res) => {
  res.set('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});


app.all("/pg13", (req, res) => {
  res.set('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});



app.all("/pg", (req, res) => {
  res.set('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});


//telling the ex





//app.use(express.static('js'))

app.use(express.json({ limit: '100MB' }));

// start up the webserver

app.listen(PORT, () =>
  console.log('listening on http://Localhost:' + PORT));




//import the login.js function adn call it



//const login = require('./login.js')


//login(app, db);

// import the rest fucntion
// has to be last
const setUpRESTapi = require('./rest-api')


setUpRESTapi(app, db);

