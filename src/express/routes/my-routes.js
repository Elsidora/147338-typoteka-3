'use strict';

const {Router} = require(`express`);
const myRouter = new Router();

myRouter.get(`/`, (req, res) => res.render(`views/my`));
myRouter.get(`/comments`, (req, res) => res.render(`views/my/comments`));
myRouter.get(`/categories`, (req, res) => res.render(`views/my/categories`));

module.exports = myRouter;