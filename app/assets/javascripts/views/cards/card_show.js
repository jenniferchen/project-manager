TrelloClone.Views.CardShow = Backbone.CompositeView.extend({
  template: JST['cards/show'],
  tagName: 'li',
  className: "card panel panel-default",
  events: {
    "click .launch-card-detail": 'viewDetail'
  },
  id: function(){ return "card-" + this.model.id },
  initialize: function(){
;  },
  render: function(){
    var renderedContent = this.template({ card: this.model });
    this.$el.html(renderedContent);
    return this;
  },
  viewDetail: function(event){
    var cardDetailView = new TrelloClone.Views.CardDetail({ model: this.model });
    this.addSubview(".card-detail",cardDetailView);
    var idTag = "#target-" + this.model.id;
    this.$el.find(idTag).modal();
  }

});