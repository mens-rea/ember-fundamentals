// app/routes/contacts/new.js
import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.createRecord('contact');
  },
  setupController(controller, model){
    this._super(controller, model);
  },
  actions: {
    saveContact(newContact) {
      newContact.save().then(response => {
        console.log("Saved your message!");
        newContact.set('responseMessage', 'Thank you! We\'ve just saved your email address: '+newContact.email);
        newContact.set('email', '');
        newContact.set('message', '');
      });
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});