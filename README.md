# Ember Intro Part 2 - Models & Data, Components

## Installation

* `git clone <repository-url>` this repository
* `cd ember-practice`
* `npm install`

## Notes

- Create a new route and template in terminal:
`ember g route cars`
- In /routes/cars.js:
```
export default Route.extend({
    model: function() {
        return ['Ford', 'Chevy', 'Honda']
    }
});
```
- The above is a model with an array of car names
- In the 'cars.hbs' template:
```
<h1>Cars</h1>

<ul>
    {{#each model as |car|}}
        <li>{{car}}</li>
    {{/each}}
</ul>
```
- Can also make a 'cars' array inside cars router. Then, return that array in the model's function
- Let's say we want to use https://api.github.com/users for display users
- `ember g route users` to create a users route and template
- Then, in the users route:
```
export default Route.extend({
    model: function() {
        let url = 'https://api.github.com/users'
        return Ember.$.getJSON(url).then(function(data) {
            return data.splice(0, 10) // only retrieve 10 results
        })
    }
});
```
- The users template can have the following to display the users:
```
<ul>
    {{#each model as |user|}}
        <li>{{user.login}}</li>
    {{/each}}
</ul>
```