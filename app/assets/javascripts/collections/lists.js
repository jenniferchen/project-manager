TrelloClone.Collections.Lists = Backbone.Collection.extend({
  model: TrelloClone.Models.List,
  url: 'api/lists',
  comparator: function(list){
    return -list.escape('ord');
  },
  initialize: function(models, options){
    this.board = options.board;
  }
});