'use strict';

const {Router} = require(`express`);
const mainRouter = new Router();


mainRouter.get(`/`, (req, res) => {
  res.render(`views/main/index`);
});

module.exports = mainRouter;