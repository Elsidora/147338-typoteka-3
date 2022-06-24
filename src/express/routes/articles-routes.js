'use strict';

const {Router} = require(`express`);
const articlesRouter = new Router();

articlesRouter.get(`/category/:id`, (req, res) => res.render(`pages/articles/category/:id`));
articlesRouter.get(`/add`, (req, res) => res.render(`pages/articles/add`));
articlesRouter.get(`/edit/:id`, (req, res) => res.render(`pages/articles/edit/:id`));
articlesRouter.get(`/:id`, (req, res) => res.render(`pages/articles/:id`));

module.exports = articlesRouter;