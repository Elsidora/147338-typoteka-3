const {red, green} = require(`chalk`);
const http = require(`http`);
const {promises} = require(`fs`);

const {
  FILE_NAME,
  DEFAULT_PORT,
  HttpCode,
} = require(`../../constants`);

const sendResponse = (res, statusCode, message) => {
  const template = `
    <!Doctype html>
      <html lang="ru">
      <head>
        <title>With love from Node</title>
      </head>
      <body>${message}</body>
    </html>`.trim();

  res.writeHead(statusCode, {
    'Content-Type': `text/html; charset=UTF-8`,
  });

  res.end(template);
};

const onClientConnect = async (req, res) => {
  const notFoundMessageText = `Not found`;

  switch (req.url) {
    case `/`:
      try {
        const fileContent = await promises.readFile(FILE_NAME);
        const mocks = JSON.parse(fileContent);
        const message = mocks.map((post) => `<li>${post.title}</li>`).join(``);
        sendResponse(res, HttpCode.OK, `<ul>${message}</ul>`);
      } catch (err) {
        sendResponse(res, HttpCode.NOT_FOUND, notFoundMessageText);
      }

      break;
    default:
      sendResponse(res, HttpCode.NOT_FOUND, notFoundMessageText);
      break;
  }
};

const initServer = (port) => {
  const customPort = Number.parseInt(port, 10) || DEFAULT_PORT;
  http.createServer(onClientConnect)
    .listen(customPort)
    .on(`listening`, (err) => {
      console.info(green.bold(`Ожидаю соединений на ${customPort}`));
    })
    .on(`error`, ({message}) => {
      console.error(red.bold(`Ошибка при создании сервера: ${message}`));
    });
};
module.exports = {
  name: `--server`,
  init(port) {
    initServer(port);
  }
}