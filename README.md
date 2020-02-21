# Ember Intro Part 2 - Models & Data, Components

## Installation

* `git clone <repository-url>` this repository
* `cd ember-practice`
* `npm install`

## Notes

- Create a new model (which will be generated in the 'models' directory):
`ember g model car`
- Keep model names singular
- Create a controller (which will create cars.js in the controllers directory):
`ember g controller cars`
- Remember, we use controllers for events, or actions
- We're going to use the default Rest Adapter
- Create an 'adapters' folder in the 'app' directory
- Create 'application.js' (application adaptor) in the 'adapter' folder
- In application.js:
```
import DS from 'ember-data'

export default DS.RESTAdapter.extend({
    host: "cars.json?jsonp=?",
    shouldReloadAll(){return true} // return false if no records at all
})
```
- In /models/car.js:
```
import Model from '@ember-data/model';

import DS from 'ember-data'
let attr = DS.attr

// defining the fields we want
export default Model.extend({
    make: attr('string'),
    model: attr('string'),
    year: attr('string')
});
```
- In /routes/cars.js:
```
export default Route.extend({
    model: function() {
        return this.store.findAll('car')
    }
});
```

