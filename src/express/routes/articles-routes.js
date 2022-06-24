'use strict';

const {Router} = require(`express`);
const articlesRouter = new Router();

articlesRouter.get(`/category/:id`, (req, res) => res.render(`views/articles/category/:id`));
articlesRouter.get(`/add`, (req, res) => res.render(`views/articles/add`));
articlesRouter.get(`/edit/:id`, (req, res) => res.render(`views/articles/edit/:id`));
articlesRouter.get(`/:id`, (req, res) => res.render(`views/articles/:id`));

module.exports = articlesRouter;