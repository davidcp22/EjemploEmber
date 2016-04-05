App = Ember.Application.create();

App.Router.map(function() {

});

App.IndexRoute = Ember.Route.extend({

  model: function() {
     mensajes = [];
    $.ajax({

      url: "http://udem.herokuapp.com/parcial",
      async:false,
      success:function(data){
         mensajes =  data.messages;
      },
      error: function(e){
        return e;
      }
    });

    return mensajes;
  }

})


App.IndexController = Ember.Controller.extend({
  filtroText: '',
  Results: function() {
    var filter = this.get('textoFliter');
    return this.get('model').filter(function(item) {
      return item.toLowerCase().indexOf(filter) !== -1;
    });
  }.property('filtroText')
});

