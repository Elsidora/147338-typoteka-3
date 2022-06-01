'use strict';

const help = require(`./cli/help`);
const version = require(`./cli/version`);
const generate = require(`./cli/generate`);
const server = require(`./cli/server`);
const [, , option, count, port] = process.argv;

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
  case `--server`:
    server.init(port);
    break;
  default:
    help.init();
}
