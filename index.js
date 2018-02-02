const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var favicon - require('server-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongo = require('mongodb');

var app = express();

app.use(express.static(__dirname));

//route

app.get("/",function(req,res){
  res.render('index.html');

});

/*  app.use(express.static(path.join(__dirname, 'public')))
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')
  app.get('/', (req, res) => res.render('pages/index'))
  */

  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
