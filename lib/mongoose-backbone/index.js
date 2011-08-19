/**
 * 
 */
function MongooseBackboneBridge(){
}

MongooseBackboneBridge.prototype.expose = function(model, app){
  var collection = model.modelName.toLowerCase()+'s';
  app.get('/backbone.models.js', function(req, res){
    var script = "window."+model.modelName+" = Backbone.Model.extend({});"
    script += "window."+model.modelName+"s = Backbone.Collection.extend({model:window."+model.modelName+", url:'/"+collection+"'});"
    res.send(script);
  })
  app.get('/'+collection, function(req, res){
    console.log('searching');
    model.find({}, function(err, docs){
      res.send(docs);
    });
  });
}

module.exports = new MongooseBackboneBridge();
