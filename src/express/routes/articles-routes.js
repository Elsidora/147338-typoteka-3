'use strict';

const {Router} = require(`express`);
const articlesRouter = new Router();

articlesRouter.get(`/category/:id`, (req, res) => res.render(`/articles/category/:id`));
articlesRouter.get(`/add`, (req, res) => res.render(`/articles/add`));
articlesRouter.get(`/edit/:id`, (req, res) => res.render(`/articles/edit/:id`));
articlesRouter.get(`/:id`, (req, res) => res.render(`/articles/:id`));

module.exports = articlesRouter;