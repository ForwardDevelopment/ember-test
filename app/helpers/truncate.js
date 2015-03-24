import Ember from 'ember';

export function truncate(/*params, hash*/) {
}

Ember.Handlebars.helper('truncate', function(text, options){
  var limit = options.hash.limit || 46;
  if (text.length > limit){
    text = text.substr(0, limit - 3) + "...";
  }
  return text;
});

export default Ember.HTMLBars.makeBoundHelper(truncate);
