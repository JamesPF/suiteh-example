const express = require('express');
const hbs = require('express-handlebars');

var app = express();

const port = process.env.PORT || 3000;

app.engine('handlebars', hbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('login', {layout: 'login'});
});

app.get('/dashboard', (req, res) => {
  res.render('dashboard', {layout: 'dashboard'})
});

app.listen(port, () => {
  console.log('App is listening on port ' + port);
})
