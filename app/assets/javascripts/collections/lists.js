TrelloClone.Collections.Lists = Backbone.OrderedCollection.extend({
  model: TrelloClone.Models.List,
  url: 'api/lists',
  initialize: function(models, options){
    this.board = options.board;
  }
});