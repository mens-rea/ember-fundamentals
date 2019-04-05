// app/models/author.js
import { empty } from '@ember/object/computed';
import DS from 'ember-data';
import Faker from 'faker';

export default DS.Model.extend({

  name: DS.attr('string'),
  books: DS.hasMany('book', { polymorphic: true, async: true }),

  isNotValid: empty('name'),
  isEditing: false,

  randomize() {
    this.set('name', Faker.name.findName());

    // With returning the author instance, the function can be chainable,
    // for example `this.store.createRecord('author').randomize().save()`,
    // check in Seeder Controller.
    return this;
  }
});