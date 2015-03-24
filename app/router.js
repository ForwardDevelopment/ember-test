import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', { path: '/' } );
  this.route('about');
  this.route('renters');
  this.route('landlords');
  this.route('myaccount');
  this.resource('destinations');
  this.resource('listings');
  this.resource('listing', {path: '/listing/:listing_id' });

  // this.resource('listings', function(){
  //       this.route('listing', {path: '/listing/:listing_id' });
  // });

});


export default Router;
