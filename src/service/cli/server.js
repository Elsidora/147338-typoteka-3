const express = require(`express`);

const app = express();
app.use(express.json());
const {red, green} = require(`chalk`);
const {promises} = require(`fs`);

const {
  FILE_NAME,
  DEFAULT_PORT,
  HttpCode,
} = require(`../../constants`);

app.get(`/posts`, async (req, res) => {
  try {
    const fileContent = await fs.readFile(FILENAME);
    const mocks = JSON.parse(fileContent);
    res.json(mocks);
  } catch (_err) {
    res.send([]);
  }
});

app.use((req, res) => res
  .status(HttpCode.NOT_FOUND)
  .send(`Not found`));

const initServer = (port) => {
  const customPort = Number.parseInt(port, 10) || DEFAULT_PORT;

    app.listen(customPort)
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