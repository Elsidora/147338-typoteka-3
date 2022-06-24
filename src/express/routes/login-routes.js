'use strict';

const {Router} = require(`express`);
const loginRouter = new Router();

loginRouter.get(`/`, (req, res) => res.render(`pages/main/login`));

module.exports = loginRouter;