TrelloClone.Collections.Boards = Backbone.Collection.extend({
  model: TrelloClone.Models.Board,
  url: 'api/boards'
  // getOrFetch: function(){
  //   var boards = this;
  //   var board;
  //   if (board = this.get(id)){
  //     board.fetch();
  //   } else {
  //     board = new App.Models.Todo({ id: id} )
  //     board.fetch({
  //       duccess: function() { boards.add(board); }
  //     });
  //   }
  //   return board;
  // }

});

TrelloClone.Collections.boards = new TrelloClone.Collections.Boards();