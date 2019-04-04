import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return this.store.createRecord('invitation');
    },
    actions: {
        saveInvitation(newInvitation){
            /* const email = this.emailAddress;

            const newInvitation = this.store.createRecord('invitation', { email: email }); */
            newInvitation.save().then(response => {
                console.log('your email was saved!');
                newInvitation.set('responseMessage', 'Thank you! We\'ve just saved your email address: '+this.emailAddress);
                newInvitation.set('email', '');
            });
        },

        willTransition() {
          // rollbackAttributes() removes the record from the store
          // if the model 'isNew'
          this.controller.get('model').rollbackAttributes();
        }
    }
});