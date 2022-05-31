'use strict';
const FILE_NAME = `mocks.json`;
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

module.exports = {
  FILE_NAME,
  ArrayElements,
  THREE_MONTH_MS,
  ExitCode,
};
