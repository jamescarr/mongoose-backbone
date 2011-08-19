
/**
 * Module dependencies.
 */

var express = require('express');
var mongoose = require('mongoose');
var mongooser  = require('./../../')
var app = module.exports = express.createServer();

// Set Up Models
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: String
  , lastName: String
  , active: Boolean
});
var User = mongoose.model('User', UserSchema);
mongoose.connect('mongodb://localhost/mongoose-backbone-test');
var user = new User({firstName:'James', lastName:'Carr', active:true});
user.save();
// expose it
mongooser.expose(User, app);
// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

// Routes

app.get('/', function(req, res){
  res.render('index', {
    title: 'Express'
  });
});

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
