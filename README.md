# CoinObserver

CoinObserver is a web application displaying pseudo-realtime for selected assets.
The application consists of a frontend part written in Vue.js, a backend part 
which re-routes the data to the frontend and persists information into SQLite,
and a mock remote service generating the asset data. Both parts of the backend portion
are written in Node.js, using Express.js for REST-like API. 

## Instructions

For every part of the application, clone the repository and 'npm install' 
all the necessary dependencies specified in their respective package.json file.

Start the mock remote data service via entry point.
Follow up with starting the application server via entry point.
Finally, since the frontend portion was boostrapped via Vue-cli tools,
refer to the scripts part of the package.json file for further instructions.

## Dependencies

Javascript ES6, Node.js 10+, Vue 2.0+, SQlite

## Thank you creators of Node, SQlite, Vue and others 
## Created by Daedalus1948@github, 2017