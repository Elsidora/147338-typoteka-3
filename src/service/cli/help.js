'use strict';
const chalk = require(`chalk`);

const getHelpContent = () => {
  const helpContent = `
    Программа запускает http-сервер и формирует файл с данными для API.
    Гайд:
    service.js <command>
    Команды:
    --version:            выводит номер версии
    --help:               печатает этот текст
    --generate <count>    формирует файл mocks.json
  `;
  console.log(chalk.grey(helpContent));
};

module.exports = {
  name: `--help`,
  init() {
    getHelpContent();
  }
};
