import Route from '@ember/routing/route';

export default Route.extend({
  actions:{
    saveContact(){
      newContact.save().then(() => this.transitionTo('contact'));
    }
  }
});
