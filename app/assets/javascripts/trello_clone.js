window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new TrelloClone.Routers.AppRouter();
    Backbone.history.start();
  }
};

Backbone.CompositeView = Backbone.View.extend({
  addSubview: function(selector, subview) {
    this.subviews(selector).push(subview);
    this.attachSubview(selector, subview.render());
  },

  attachSubview: function(selector, subview) {
    this.$(selector).append(subview.$el);
    subview.delegateEvents();
  },

  attachSubviews: function(){
    var view = this;

  }

  subviews: function(selector) {
    this._subviews = this._subviews || {};
    if(!selector){
      return this._subviews;
    } else {
      this._subviews[selector] = this_subviews[selector] || [];
      return this._subviews[selector];
    }
    }
  }
})