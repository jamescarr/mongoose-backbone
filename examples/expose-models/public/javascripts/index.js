$(function(){
  var ApplicationView = Backbone.View.extend({
    el:'body',
    events: {
      'load' : 'render'
    },
    render: function(){
      var users = new Users()
      users.fetch();
      users.bind('reset', function(){
        var user = users.at(0);
        $('#name').text(user.get('firstName') + ' ' + user.get('lastName'));
        $('#active').text(user.get('active'));
      });
    }
  });

  var app = new ApplicationView();
  app.render()
});
