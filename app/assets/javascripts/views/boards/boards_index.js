TrelloClone.Views.Board = Backbone.View.extend({
  template: JST["boards/board"],
  render: function(){
    var renderedContent = this.template({ board: this.model });
    this.$el.html(renderedContent);
    return this;
  }
  
})

TrelloClone.Views.BoardsIndex = Backbone.View.extend({
  template: JST["boards/index"],
  initialize: function(){
    this.listenTo(this.collection, "sync", this.render()); 
  },
  render: function(){
    var view = this;
    var renderedContent = this.template({ boards: this.collection });
    this.$el.html(renderedContent);
    this.collection.each(function(board){
      var boardView = new TrelloClone.Views.Board({ model: board });
      view.$el.append(boardView.render().$el);
    })
    return this;
  }
})