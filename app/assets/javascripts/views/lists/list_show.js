TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
  template: JST['lists/show'],
  tagName: "li",
  className: "list col-xs-3",

  initialize: function(){
    var cardNewView = new TrelloClone.Views.CardNew({ model: this.model });
    this.addSubview('.cards-new', cardNewView);

    var cards = this.model.cards();
    cards.each(this.addCard.bind(this));
    this.listenTo(cards, "add", this.addCard);

    // this.$el.droppable({
    //   accept: "#card",
    //   drop: function(event, ui) {
    //     this.addCard(ui);
    //   }
    // });
  },

  addCard: function(card){
    var cardShowView = new TrelloClone.Views.CardShow({ model: card});
    this.addSubview('.cards', cardShowView);
  },

  render: function(){
    var renderedContent = this.template({ list: this.model });
    this.$el.html(renderedContent);
    this.attachSubviews();
    this.makeCardsSortable();
    return this;
  },

  makeCardsSortable: function(){
    var cards = this.$el.find(".cards")
    cards.sortable({
      connectWith: ".cards",
      placeholder: "panel panel-primary",
      forcePlaceholderSize: true,
      // update: function (event, ui) {
      //   var data = cards.sortable('serialize');
      //   debugger
      //   // $.ajax({
      //   //     data: data,
      //   //     type: 'POST',
      //   //     url: '/your/url/here'
      //   // });
      // }
    });
  }

});