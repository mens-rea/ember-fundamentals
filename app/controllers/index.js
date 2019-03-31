import { computed, observer } from '@ember/object';
import Controller from '@ember/controller';
import { empty } from "@ember/object/computed";

export default Controller.extend({
    isDisabled: computed('emailAddress', function(){
        return this.emailAddress === '';
    }),
    
    emailAddress: '',

    actualEmailAddress: computed('emailAddress', function(){
        console.log('actualEmailAddress function is called: ', this.emailAddress);
    }),

    emailAddressChanged: observer('emailAddress', function(){
        console.log('observer is called', this.emailAddress);
    })
});
