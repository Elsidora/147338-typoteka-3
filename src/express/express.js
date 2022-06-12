const express = require(`express`);

const mainRoutes = require(`./routes/main-routes`);
const registerRoutes = require(`./routes/register-routes`);
const loginRoutes = require(`./routes/login-routes`);
const searchRoutes = require(`./routes/search-routes`);
const articlesRoutes = require(`./routes/articles-routes`);
const myRoutes = require(`./routes/my-routes`);



const DEFAULT_PORT = 8080;

const app = express();

app.use(`/`, mainRoutes);
app.use(`/register`, registerRoutes);
app.use(`/login`, loginRoutes);
app.use(`/search`, searchRoutes);
app.use(`/articles`, articlesRoutes);
app.use(`/my`, myRoutes);

app.listen(DEFAULT_PORT);
