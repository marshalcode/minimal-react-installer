#!/usr/bin/env node

const ncp = require('ncp');
ncp.limit = 16;

console.log();
console.log("------------------------------------------------------------------");
console.log("creating your minimal react app");
console.log("");
console.log("------------------------------------------");

(async () => {
  const cwd = process.cwd();
  const currentDIR = __dirname;
  const frame = 'minimal-react-app';
  const msg = `Successfully installed ${frame} ✅`;
  const dirToGo = `${cwd}/`;
  ncp(`${currentDIR}/template/`, dirToGo, err => {
    if (err) return console.error(err);
    console.log(msg);
  });
})();