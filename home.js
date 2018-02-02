var express = require('express');
var path = require('path');
var PORT = process.env.PORT || 5000;

//opening my module
var date = require('./mymod.js');
var app = express();

app.use(express.static(__dirname));

//route

app.get("/",function(req,res){
  res.render('index.html');
  res.writeHead(200,{'Content-Type':'text/html'});
  res.end('todays date')
});

/*  app.use(express.static(path.join(__dirname, 'public')))
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')
  app.get('/', (req, res) => res.render('pages/index'))
  */

  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))