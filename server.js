const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const SequelizeStore = require("connect-session-sequelize")(session.Store);
 
const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: process.env.SECRET,
  cookie: {
    maxAge: 86400000
  },
  store: new SequelizeStore({
    db: sequelize,
  }),
  resave: false,
  saveUninitialized: false,
};
app.use(session(sess));

const hbs = exphbs.create({}); 

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));
app.use('/bulma', express.static(__dirname + '/node_modules/bulma/css/'));

app.use(routes);

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});