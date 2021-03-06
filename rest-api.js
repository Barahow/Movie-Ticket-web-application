const { path } = require('express/lib/application');

// Which table stores user data and name of password column?
const userTable = 'person';
const passwordField = 'password';
const userRoleField = 'userRole';

// Global variable for our database connection
let db;



// Helper function for creating prepared statements
// and running them and catching any errors
function runQuery(tableName, req, res, parameters, sqlForPreparedStatement, onlyOne = false) {

  // If the acl modules says that this route is not allowed for the user
 

  let result;
  try {
    let stmt = db.prepare(sqlForPreparedStatement);
    // use the method all if the query starts with SELECT
    // otherwise use the method run
    let method = sqlForPreparedStatement.trim().toLowerCase().indexOf('select') === 0 ?
      'all' : 'run';
    result = stmt[method](parameters);
  }
  catch (error) {
    // if we have an error let the result be an object
    // with the single propery _error and convert the error to a string
    result = { _error: error + '' };
  }
  if (onlyOne) { result = result[0]; }
  result = result || null;
  res.status(result ? (result._error ? 500 : 200) : 404);
  res.json(result);
}

// Export the function setupRESTapi as a Node.js module
module.exports = function setupRESTapi(app, databaseConnection) {

  // Store the database connection in the global variable db
  db = databaseConnection;

  // Get the names of all the tables and views in the db
  let tablesAndViews = db.prepare(`
  SELECT name, type 
  FROM sqlite_schema
  WHERE 
    (type = 'table' OR type = 'view') 
    AND name NOT LIKE 'sqlite_%'
`).all();

  // Add a special route that will list all the tables and views
  app.get('/api/tablesAndViews', (req, res) => {
   
    res.json(tablesAndViews);
  });

  // Loop through all tables and views and create REST-routes for them
  for (let { name, type } of tablesAndViews) {

    // Create a route to get (read) all posts from a table
    app.get('/api/' + name, (req, res) => {
      runQuery(name, req, res, {}, `
        SELECT *
        FROM ${name}
      `);
    });

   

    // Don't add POST, PUT or DELETE route to views
    if (type === 'view') {
      continue;
    }

    // Add a post route for the table
    app.post('/api/' + name, (req, res) => {
      // do not allow id:s to be set manually
      //delete req.body.id;

      // if this is the user table then encrypt the password
      if (name === userTable) {
        // add the most basic user role
        // this also changes the user role to just "user"
        // if someone tries to send something else through our REST-api
        req.body[userRoleField] = 'user';
        // encrypt the field whose name is stored in passwordField
        req.body[passwordField] =
          passwordEncryptor(req.body[passwordField]);
      }

      runQuery(name, req, res, req.body, `
        INSERT INTO ${name} (${Object.keys(req.body)})
        VALUES (${Object.keys(req.body).map(x => ':' + x)})
      `);
    });

    // Create a route to get a single post from a table based on its id
    app.get('/api/' + name + '/:id', (req, res) => {
      // Create a prepared statement with a parameter :id as part of it
      runQuery(name, req, res, req.params, `
        SELECT *
        FROM ${name}
        WHERE id = :id
      `, true);
     
     

    });

    // And put/patch routes
    let putAndPatch = (req, res) => {

      // if this is the user table then encrypt the password
      if (name === userTable && req.body[passwordField]) {
        // encrypt the field whose name is stored in passwordField
        req.body[passwordField] =
          passwordEncryptor(req.body[passwordField]);
      }

      // do not allow changing user roles through the REST-api
      delete req.body[userRoleField];

      runQuery(name, req, res, { ...req.body, ...req.params }, `
        UPDATE ${name}
        SET ${Object.keys(req.body).map(x => x + ' = :' + x)}
        WHERE id = :id
      `);
    };

    // Since the distinction between put and patch requests is 
    // floating nowadays let us provide the same logic for both
    app.put('/api/' + name + '/:id', putAndPatch);
    app.patch('/api/' + name + '/:id', putAndPatch);

    // App delete routes
    app.delete('/api/' + name + '/:id', (req, res) => {
      runQuery(name, req, res, req.params, `
        DELETE FROM ${name}
        WHERE id = :id
      `);
    });

  }

  // Add a 404 route to the api
  // (will only match the request if no other routes matches it,
  //  since this routes is declared last)
  app.all('/api/*', (req, res) => {
    res.status(404);
    res.json({ _error: 'No such route!' });
  });

}
