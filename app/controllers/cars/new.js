import Controller from '@ember/controller';

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
