# basic-express-server
[GitHub](https://github.com/alsatarysamah/basic-express-server)

[heroku](https://samah-basic-express-server.herokuapp.com/)

[PullRequist](https://github.com/alsatarysamah/basic-express-server/pull/1)

[Action](https://github.com/alsatarysamah/basic-express-server/actions)

# Person Route
Method: GET

Path: /person

Expects a query string from the user with a “name” property
When present, output JSON to the client with this shape: { name: "name provided" }
Without a name in the query string, force a “500” error

# middleware
Creating a middleware folder and add 2 middleware modules to it:

**logger.js**
Performs a console.log with the request method and path

**validator.js**
Checks the query string for a name property

# Error-handlers
404 and 500


# Testing

**server.test.js**
tests:

1-Handle not found request

2-Bad method

3-Home route

**validator.test.js**
tests

1-name is in the query string

2-Output object is correct

3- name is empty

4-name is not string

**logger.test.js**
1-it is logging something or routes
2-it is calling next

# Deploy to dev branch
 ACP on dev branch. after we check it passing all test Open a pull request from dev to main merge this branch Once the tests pass, Heroku will deploymy “main” branch to my “production” app!
