TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST['boards/show'],

  initialize: function(){
    var lists = this.model.lists();
    this.listenTo(lists, "add", this.addList);

    lists.each(this.addList.bind(this));
    var listNewView = new TrelloClone.Views.ListNew({ model: this.model });
    this.addSubview(".lists-new", listNewView);
  },

  addList: function(list, index){
    var listView = new TrelloClone.Views.ListShow({ model: list});
    this.addSubview(".lists", listView);
  },

  render: function(){
    var renderedContent = this.template({ board: this.model });
    this.$el.html(renderedContent);
    this.attachSubviews();
    this.makeListsSortable();
    return this;
  },

  makeListsSortable: function(){
    var view = this;
    var lists = this.$el.find(".lists")
    lists.sortable({
      connectWith: ".lists",
      placeholder: "col-xs-3 panel panel-primary",
      forcePlaceholderSize: true,
      update: function (event, ui) {
        var data = lists.sortable('serialize');
        view.model.lists().updateOrd(data);
      }
    });
  }
});