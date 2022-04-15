#!/usr/bin/env node

const child = require('child_process').spawn;
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const header = require('boxen');
const script = path.format({dir: __dirname, base: 'pager.js'});
const http = require('http')

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
}
const server = http.createServer(requestListener);
server.listen(process.env.port);

console.log(chalk.magenta(
    header('Instagram Chatbot v1.0', {
        padding: 1,
        borderColor: 'magenta',
        borderStyle: 'classic'
    })
));

child(process.execPath, [script], {
  cwd: __dirname,
  env: {
     IG_USERNAME: process.env.usrname,
     IG_PASSWORD: process.env.password,
     FORCE_COLOR: 3
       },
     stdio: 'inherit'
    });
