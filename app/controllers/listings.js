import Ember from 'ember';

export default Ember.Controller.extend({
     listingCount: 20,
     time: function() {
          return ( new Date()).toDateString();
     }.property()
});
