'use strict';
const {promises} = require(`fs`);
const {red, green} = require(`chalk`);

const {
  getRandomInt,
  shuffle,
  createDate,
} = require(`../../utils`);

const {
  FILE_NAME,
  ArrayElements,
  THREE_MONTH_MS,
  ExitCode,
} = require(`../../constants`);

const FILE_SENTENCES_PATH = `./data/sentences.txt`;
const FILE_TITLES_PATH = `./data/titles.txt`;
const FILE_CATEGORIES_PATH = `./data/categories.txt`;

const readContent = async (filePath) => {
  try {
    const content = await promises.readFile(filePath, `utf8`);
    return content.trim().split(`\n`);
  } catch (err) {
    console.error(red(err));
    return [];
  }
};

const createPublicationObject = (titles, categories, sentences) => {
  return {
    title: TITLES[getRandomInt(0, TITLES.length - 1)],
    title: titles[getRandomInt(0, titles.length - 1)],
    createdDate: createDate(Date.now() - THREE_MONTH_MS, Date.now()),
    announce: shuffle(sentences).splice(0, getRandomInt(ArrayElements.MIN, ArrayElements.ANNOUNCE_MAX_COUNT)).join(` `),
    fullText: shuffle(sentences).splice(getRandomInt(0, sentences.length - 1), getRandomInt(1, sentences.length - 1)).join(` `),
    сategory: shuffle(categories).splice(0, getRandomInt(1, categories.length - 1)),
  };
};

const generatePublications = async (count = null) => {
  let publicationsCount = Number.parseInt(count, 10) || ArrayElements.MIN;
  if (publicationsCount > ArrayElements.MAX) {
    console.error(red.bold(`Не больше ${ArrayElements.MAX} публикаций`));
    process.exit(ExitCode.ERROR);
  }
  if (publicationsCount === 0) {
    publicationsCount = ArrayElements.MIN;
  }
  const [titles, categories, sentences] =
    await Promise.all([readContent(FILE_TITLES_PATH), readContent(FILE_CATEGORIES_PATH), readContent(FILE_SENTENCES_PATH)])
      .catch((err) => {
        console.log(err);
      });
  const data = JSON.stringify(Array.from({length: publicationsCount}, createPublicationObject.bind(null, titles, categories, sentences)));

  try {
    await promises.writeFile(FILE_NAME, data);
    console.log(green.bold(`Operation success. File created.`));
    process.exit(ExitCode.SUCCESS);
  } catch (err) {
    console.error(red.bold(`Can't write data to file...`));
    process.exit(ExitCode.ERROR);
  }
};

module.exports = {
  name: `--generate`,
  init(count) {
    generatePublications(count);
  }
};
