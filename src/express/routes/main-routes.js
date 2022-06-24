'use strict';

const {Router} = require(`express`);
const mainRouter = new Router();


mainRouter.get(`/`, (req, res) => {
  res.render(`pages/main/index`);
});

module.exports = mainRouter;