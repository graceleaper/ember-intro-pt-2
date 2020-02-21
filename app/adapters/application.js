import DS from 'ember-data'

export default DS.RESTAdapter.extend({
    // below json is coming from public directory
    host: "cars.json?jsonp=?",
    shouldReloadAll(){return true} // return false if no records at all
})