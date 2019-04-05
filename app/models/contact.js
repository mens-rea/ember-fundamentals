import DS from 'ember-data';
import { not,and,match } from '@ember/object/computed';

export default DS.Model.extend({
  email: DS.attr('string'),
  message: DS.attr('string'),
  responseMessage: '',
  headerMessage: 'Leave us a Message',
  emailValid: match('email', /^.+@.+\..+$/),
  messageValid: match('message', /^.{6,}$/),
  contactValid: and('emailValid','messageValid'),
  isValid: not('contactValid')
});