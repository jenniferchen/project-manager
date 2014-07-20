TrelloClone.Collections.Cards = Backbone.OrderedCollection.extend({
  model: TrelloClone.Models.Card,
  url: 'api/cards'
});