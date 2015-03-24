import DS from 'ember-data';

export default DS.Model.extend({
    p_id: DS.attr('number'),
    area: DS.attr('string'),
    address: DS.attr('string'),
    startingBid: DS.attr('number'),
    currentBid: DS.attr('number'),
    description: DS.attr('string')
});
