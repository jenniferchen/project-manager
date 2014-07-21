TrelloClone.Views.CardNew = Backbone.View.extend({
  template: JST['cards/new'],

  events: {
    "submit form#create-card": "newCard"
  },

  render: function(){
    var renderedContent = this.template({ list: this.model });
    this.$el.html(renderedContent);
    return this;
  },

  newCard: function(event){
    event.preventDefault();
    var view = this;
    var formData = $(event.target).serializeJSON();
    var card = new TrelloClone.Models.Card(formData['card']);

    card.save({}, {
      success: function(){
        view.model.cards().add(card);
        view.render();
      }
    })
  }

});