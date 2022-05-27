'use strict';

const help = require(`./cli/help`);
const version = require(`./cli/version`);
const generate = require(`./cli/generate`);
const [, , option, count] = process.argv;

switch (option) {
  case `--help`:
    help.init();
    break;
  case `--version`:
    version.init();
    break;
  case `--generate`:
    generate.init(count);
    break;
  default:
    help.init();
}
