const express = require('express');
const hbs = require('express-handlebars');

var app = express();

app.engine('handlebars', hbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('login', {layout: 'login'});
});

app.get('/dashboard', (req, res) => {
  res.render('dashboard', {layout: 'dashboard'})
});

app.listen(3000, () => {
  console.log('App is listening on port 3000');
})
