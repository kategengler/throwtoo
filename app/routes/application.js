import Ember from 'ember';

export default Ember.Route.extend({
  gmail: Ember.inject.service('gmail'),

  beforeModel: function() {
    return this.get('gmail').checkAuth();
  },

  model: function(params) {
    return this.get('gmail').messages();
  }
});
