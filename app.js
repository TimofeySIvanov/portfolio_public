//requiring express!
const express = require('express');
const app = express();
//Seting up your middleware
app.set('view engine', 'pug');
app.use('/static', express.static('public'));
//Let's set up the Routes!
const routes = require('./routes');
app.use(routes);
//Setting up the 404 error response
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});
//setting other error responses
app.use((err, req, res, next) => {
  res.locals.error = err;
  res.render('error', err);
});
//Listeting to port 3000!
app.listen(3000, () => {
    console.log('The profile application is running at localhost:3000')
});
