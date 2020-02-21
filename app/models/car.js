import Model from '@ember-data/model';

import DS from 'ember-data'
let attr = DS.attr

// defining the fields we want
export default Model.extend({
    make: attr('string'),
    model: attr('string'),
    year: attr('string')
});
