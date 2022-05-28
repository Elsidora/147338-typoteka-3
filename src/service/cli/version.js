'use strict';
const {blue} = require(`chalk`);

const packageJsonFile = require(`../../../package.json`);
module.exports = {
  name: `--version`,
  init() {
    const version = packageJsonFile.version;
    console.info(blue.bold(version));
  }
};
