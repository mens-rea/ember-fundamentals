import { computed, observer } from '@ember/object';
import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';

export default Controller.extend({
    headerMessage: 'Still Brewing',
    isValid: match('emailAddress', /^.+@.+\..+$/),
    isDisabled: not('isValid'),
    emailAddress: '',
    actualEmailAddress: computed('emailAddress', function(){
        console.log('actualEmailAddress function is called: ', this.emailAddress);
    }),
    emailAddressChanged: observer('emailAddress', function(){
        console.log('observer is called', this.emailAddress);
    }),
    actions: {
        saveInvitation(){
            alert('Saving of the following email address in progress: '+this.emailAddress);
            this.set('responseMessage', 'Thank you! We\'ve just saved your email address: '+this.emailAddress);
            this.set('emailAddress', '');
        }
    }
});
