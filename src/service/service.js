'use strict';

const help = require(`./cli/help`);
const version = require(`./cli/version`);
const generate = require(`./cli/generate`);
const server = require(`./cli/server`);
const [, , option, number] = process.argv;

switch (option) {
  case `--help`:
    help.init();
    break;
  case `--version`:
    version.init();
    break;
  case `--generate`:
    generate.init(number);
    break;
  case `--server`:
    server.init(number);
    break;
  default:
    help.init();
}
