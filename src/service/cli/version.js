'use strict';

const packageJsonFile = require(`../../../package.json`);
module.exports = {
  name: `--version`,
  init() {
    const version = packageJsonFile.version;
    console.info(version);
  }
};
