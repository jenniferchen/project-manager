// Backbone.OrderedCollection = Backbone.Collection.extend({
//   comparator: 'ord',
//   getOrFetch: function(id){
//     var collection = this;
//     var newItem;
//     if (newItem = this.get(id)){
//       newItem.fetch();
//     } else {
//       newItem = new this.model( { id: id} )
//       newItem.fetch({
//         success: function() { collection.add(newItem); }
//       });
//     }
//     return newItem;
//   },
//   updateOrd: function(data){
//     var collection = this;
//     var ids = data.split("&").map(function(id){ return id.match(/=(\d+)/)[1]});
//     ids.forEach(function(id, idx){
//       var model = collection.getOrFetch(id);
//       model.save({'ord': idx,'list_id': collection.list.id});
//     });
//     collection.each(function(item) { 
//       if (ids.indexOf(item.id) == -1) {
//         collection.remove(item);
//       }
//     })
//   }
// });