# [JDLT](https://jdlt.co.uk) full-stack developer challenge

The [job spec](https://jdlt.co.uk/join/full-stack-developer) will help you understand what we'd like to see.

## Dependencies
* NPM / Yarn
* Nodemon (install locally if you do not already have this)
* express
* mongoose
* mocha, chai, supertest (testing)
* bootstrap & jquery outdated from initial but working.
* React
* axios

## Instructions
From the project root folder:
```
$ npm install
```
OR
```
$ yarn
```

**Key deliverables:**
* Selecting suppliers and products in the drop-downs
* A round-trip to a server pulling back prices
* Displaying the returned data in the grid
* Anything else you'd like to show us


## Steps

1. yarn init & setup github repo
2. basic app set up with config, models & controllers
3. created db & seeds file with provided product details
4. Routed, tested in insomnia
5. Tested routes Mocha/Chai
6. Introduced webpack & React frontend
  - built modules for home, navbar, index, new (& form)

## Current stage
Homepage and ProductCard removed as unnecessary. Displaying as table instead.

SEARCHBARS
Created SearchBars as common component. It takes unique product/supplier names and creates a list on click.
- (SB)style into dropdown menu
- (PI>SB)add search function onKeyUp.
  - use toUppercase() to search for matches with products
- (PI) take response from (SB) and setState(display: response)

React Front End:
- NavBar created (!TEST)
- Index makes Get Request (!TEST)
- NewProduct functions (!TEST)
- EditProduct (!TEST)
- SearchBar (!TEST)


To do:
1. FILTER FUNCTIONS!
2. Testing React
3. styling
4. hide create/delete behind secure route
5. submit

## COMPLETED
Route Testing
  - added mocha/chai/supertest
  - added test folder, spec_helper.js & mocha.opts
  - first test is running after initial EAD in use error. SOLUTION: in index.js wrap app.listen(...) in if(!module.parent){app.listen(...)} TEST PASSES
  - api index, find, create & delete route tests pass.

Routes:
- index (TESTED/PASSED)
- create (TESTED/PASSED)
- find one (TESTED/PASSED)
- delete one (TESTED/PASSED)

## Challenges
During my initial setup I encountered a minor stumbling block when running `mongod` in terminal. I discovered this is likely caused by a recent apple OS update which made the home directory non-writable.
The solution I reached was to build a new C:data/db in Home and manually set the mongod db by running `mongod --dbpath ~/data/db`

