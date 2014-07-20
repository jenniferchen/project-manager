Backbone.OrderedCollection = Backbone.Collection.extend({
  comparator: 'ord',
  updateOrd: function(data){
    var collection = this;
    var ids = data.split("&").map(function(id){ return id.match(/=(\d+)/)[1]})
    ids.forEach(function(id, idx){
      var model = collection.get(id);
      model.save({'ord': idx});
    });
  }
});