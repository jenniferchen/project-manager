TrelloClone.Views.CardDetail = Backbone.View.extend({
  template: JST['cards/detail'],
  render: function(){
    var renderedContent = this.template({ card: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});