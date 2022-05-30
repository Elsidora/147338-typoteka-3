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
  TITLES,
  SENTENCES,
  CATEGORIES,
  ArrayElements,
  THREE_MONTH_MS,
  ExitCode,
} = require(`../../constants`);

const createPublicationObject = () => {
  return {
    title: TITLES[getRandomInt(0, TITLES.length - 1)],
    createdDate: createDate(Date.now() - THREE_MONTH_MS, Date.now()),
    announce: shuffle(SENTENCES).splice(0, getRandomInt(ArrayElements.MIN, ArrayElements.ANNOUNCE_MAX_COUNT)).join(` `),
    fullText: shuffle(SENTENCES).splice(getRandomInt(0, SENTENCES.length - 1), getRandomInt(1, SENTENCES.length - 1)).join(` `),
    сategory: shuffle(CATEGORIES).splice(0, getRandomInt(1, CATEGORIES.length - 1)),
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
  const data = JSON.stringify(Array.from({length: publicationsCount}, createPublicationObject));

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
