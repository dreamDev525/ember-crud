import Photo from 'ember-crud-example/models/photo';

var ApplicationRoute = Ember.Route.extend({
  actions: {
    goToNewPhoto: function() {
      this.transitionTo('photo.new');
    },
    goToPhoto: function(model) {
      this.transitionTo('photo', model);
    },
    edit: function(model) {
      this.transitionTo('photo.edit', model.copy());
    },
    create: function(model) {
      this.storage.create(model);
    },
    update: function(model) {
      this.storage.update(model);
    },
    "delete": function(model) {
      this.storage.delete(model);
      model.destroy();
    },
    cancel: function(model) {
      Ember.run(model, "destroy");
      this.transitionTo('photos');
    }
  },
  model: function() {
    Ember.assert("App expects storage to be present", Ember.typeOf(this.storage) === 'instance');
    return promise;
  }
});

export default ApplicationRoute;
