'use strict';
const FILE_NAME = `mocks.json`;
const DEFAULT_PORT = 3003;
const THREE_MONTH_MS = 86400000 * 7 * 4 * 3;

const ArrayElements = {
  MIN: 1,
  MAX: 1000,
  ANNOUNCE_MAX_COUNT: 5,
};

const ExitCode = {
  ERROR: 1,
  SUCCESS: 0,
};

const HttpCode = {
  OK: 200,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  FORBIDDEN: 403,
  UNAUTHORIZED: 401,
};

module.exports = {
  FILE_NAME,
  DEFAULT_PORT,
  ArrayElements,
  THREE_MONTH_MS,
  ExitCode,
  HttpCode,
};
