TrelloClone.Views.CardShow = Backbone.View.extend({
  template: JST['cards/show'],
  tagName: 'li',
  className: "card panel panel-default",
  id: function(){ return "card-" + this.model.id },
  initialize: function(){
    // this.$el.draggable({
    //   revert: "invalid"
    // });
    // this.$el.sortable();
;  },
  render: function(){
    var renderedContent = this.template({ card: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});