import Controller from '@ember/controller';
import { not,and,match } from '@ember/object/computed';

export default Controller.extend({
    headerMessage: "Send us word",
    emailValid: match('emailAddress', /^.+@.+\..+$/),
    messageValid: match('emailMessage', /^.{6,}$/),
    formValidated: and('emailValid', 'messageValid'),
    isDisabled: not('formValidated'),
    actions: {
        sendMessage(){
            alert("your message was sent");
            this.set('emailAddress', '');
            this.set('emailMessage', '');
            this.set('responseMessage', 'Your message was sent!');
        }
    }
});
