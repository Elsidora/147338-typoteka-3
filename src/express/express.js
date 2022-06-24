const express = require(`express`);
const path = require(`path`);

const {HttpCode} = require(`../constants`);

const mainRoutes = require(`./routes/main-routes`);
const registerRoutes = require(`./routes/register-routes`);
const loginRoutes = require(`./routes/login-routes`);
const searchRoutes = require(`./routes/search-routes`);
const articlesRoutes = require(`./routes/articles-routes`);
const myRoutes = require(`./routes/my-routes`);

const DEFAULT_PORT = 8008;

const app = express();


app.set('views', path.resolve(__dirname, './templates'));
app.set(`view engine`, `pug`);
app.locals.basedir = app.get(`views`);

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(`/`, mainRoutes);
app.use(`/register`, registerRoutes);
app.use(`/login`, loginRoutes);
app.use(`/search`, searchRoutes);
app.use(`/articles`, articlesRoutes);
app.use(`/my`, myRoutes);

app.use((req, res) => res.status(HttpCode.NOT_FOUND).render(`pages/errors/404`));

app.use((req, res) => res.status(HttpCode.INTERNAL_SERVER_ERROR).render(`pages/errors/500`));


app.listen(DEFAULT_PORT);