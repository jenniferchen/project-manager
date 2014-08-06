TrelloClone.Views.Board = Backbone.View.extend({
  template: JST["boards/board"],
  events: {
    "click .panel": "showBoard"
  },
  render: function(){
    var renderedContent = this.template({ board: this.model });
    this.$el.html(renderedContent);
    return this;
  },
  showBoard: function(){
    Backbone.history.navigate('boards/' + this.model.id, { trigger: true })
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