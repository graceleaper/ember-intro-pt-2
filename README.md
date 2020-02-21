# Ember Intro Part 2 - Models & Data, Components

## Installation

* `git clone <repository-url>` this repository
* `cd ember-practice`
* `npm install`

## Notes
- Notice that instead of making use of DS for this branch, model is making use of an array located in /routes/cars.js
- Create a new route, which will be inside the existing 'cars' route:
`ember g route cars/new`
- Create a new controller:
`ember g controller cars/new`
- Add some content in new.hbs template
- Use `{{outlet}}` on the main cars.js template to also display the new.hbs template
- In cars.hbs template (above the `{{outlet}}`):
```
{{#link-to 'cars.new'}}Create Car{{/link-to}}
<hr>
```
- Change new.hbs template:
```
<form {{action 'addCar' on='submit'}}>
    <!--make use of input helpers-->
    <p>Make: {{input type='text' value=carMake}}</p>
    <p>Model: {{input type='text' value=carModel}}</p>
    <p>Year: {{input type='text' value=carYear}}</p>
    <p>{{input type='submit' value='Submit'}}</p>
</form>
```
- In /controllers/cars/new.js controller:
```
export default Controller.extend({
    actions: {
        addCar: function() {
            let self = this
            let newCar = this.store.createRecord('car', {
                make: this.get('carMake'),
                model: this.get('carModel'),
                year: this.get('carYear')
            })
            // save to a database, if we had one
            newCar.save()
            // redirect to 'cars' route
            self.transitionToRoute('cars')
        }
    }
});
```
