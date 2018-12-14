# CoinObserver

CoinObserver is a web application displaying pseudo-realtime for selected assets.
The application consists of a frontend part written in Vue.js, a backend part 
which re-routes the data to the frontend and persists information into SQLite,
and a mock remote service generating the asset data. Both parts of the backend portion
are written in Node.js, using Express.js for REST-like API. 

![CoinObserver](https://github.com/daedalus1948/project_images/blob/master/CoinObserver.png)

## Instructions

For every part of the application, clone the repository and 'npm install' 
all the necessary dependencies specified in their respective package.json file.

Start the mock remote data service via entry point.
Follow up with starting the application server via entry point.
Finally, since the frontend portion was boostrapped via Vue-cli tools,
refer to the scripts part of the package.json file for further instructions.

## Detailed Instructions

1) run 'npm install' and 'node mockServer.js' in 'mock_remote_api' directory
2) run 'npm install' and 'node master.js' in 'server' directory
3) run 'npm install' and 'npm run dev' in 'client' directory

## Dependencies

Javascript ES6, Node.js 10+, Vue 2.0+, SQlite

## Thank you creators of Node, SQlite, Vue and others 
## Created by pre-zbr/Daedalus1948@github, 2018
