# [JDLT](https://jdlt.co.uk) full-stack developer challenge

The [job spec](https://jdlt.co.uk/join/full-stack-developer) will help you understand what we'd like to see.

## Dependencies
* NPM / Yarn
* Nodemon (install locally if you do not already have this)
* express
* mongoose
* mocha, chai, supertest (testing)

## Instructions
From the project root folder:
```
$ npm install
```
OR
```
$ yarn
```
Then it's over to you!

**Please demonstrate:**
* Selecting suppliers and products in the drop-downs
* A round-trip to a server pulling back prices
* Displaying the returned data in the grid
* Anything else you'd like to show us


## Steps

1. yarn init & setup github repo
2. basic app set up with config, models & controllers

## Current stage
Testing routes
  - added mocha/chai/supertest
  - added test folder, spec_helper.js & mocha.opts
  - first test is running after initial EAD in use error. SOLUTION: in index.js wrap app.listen(...) in if(!module.parent){app.listen(...)} TEST PASSES
  - api tests pass.



## Challenges
Scripts updated
* Running `nodemon index.js` shows up and running on correct port but then returns a mongo timeout error.

* Seeding/creating db
Running `mongod` returns the following error: 
```exception in initAndListen: NonExistentPath: Data directory /data/db not found., terminating```

Running `yarn seed` returns cannot read dropDatabase of undefined as above errors.
* tried mkdir & sudo mkdir -p /data/db
prompts password. Entering password gets the following:
outcome: mkdir: /data/db: Read-only file system
* added console.log to mongoose.connect() in index.js. This fires.

Above problems likely caused by Catalina update - fixed by creating a data/db folder in home directory & running `mongod` again.

