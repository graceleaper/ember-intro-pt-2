import Route from '@ember/routing/route';
import Ember from 'ember'

export default Route.extend({
    model: function() {
        let url = 'https://api.github.com/users'
        return Ember.$.getJSON(url).then(function(data) {
            return data.splice(0, 10) // only retrieve 10 results
        })
    }
});
