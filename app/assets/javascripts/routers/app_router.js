TrelloClone.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    "": "boardsIndex",
    "boards/new": "boardNew",
    "boards/:id": "boardShow"
  },

  boardsIndex: function(){
    var boards = TrelloClone.Collections.boards;
    boards.fetch({
      success: function(){
        var indexView = new TrelloClone.Views.BoardsIndex({ collection: boards });
        $("#content").html(indexView.render().$el);
      }
    });
    
  },

  boardShow: function(id){
    // var board = TrelloClone.Collections.boards.get(id);
    var board = new TrelloClone.Models.Board({ id: id });
    board.fetch({
      success: function(){
        var showView = new TrelloClone.Views.BoardShow({ model: board });
        $('#content').html(showView.render().$el);
      }
    })
  },

  boardNew: function(){
    var board = new TrelloClone.Models.Board();
    var newView = new TrelloClone.Views.BoardNew({ model: board });
    $('#content').html(newView.render().$el);
  }
})