
const PORT = 3501;

const express = require('express');
const { path } = require('express/lib/application');


const bettersqlite3 = require('better-sqlite3')


const db = bettersqlite3('./database/cinema5.sqlite3');


// create a web server using express

const app = express();


// serve all the files in the frontend folder

app.use(express.static('frontend'));


// Answer with the 404 partial if the frontend looks for a non-existant partial
app.all('/partials/*', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, 'frontend', 'partials', '404.html'));
});


app.all('/', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});






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

