'use strict';

const {Router} = require(`express`);
const myRouter = new Router();

myRouter.get(`/`, (req, res) => res.render(`pages/my/my`));
myRouter.get(`/comments`, (req, res) => res.render(`pages/my/comments`));
myRouter.get(`/categories`, (req, res) => res.render(`pages/my/all-categories`));

module.exports = myRouter;