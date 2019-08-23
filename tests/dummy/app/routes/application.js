import { A } from '@ember/array';
import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
  model() {
    return A([
      EmberObject.create({
        name: 'Bronze',
        price: '99',
        usersCount: 1,
        bulkEmailsCount: 0,
        selected: false
      }),
      EmberObject.create({
        name: 'Silver',
        price: '195',
        usersCount: 1,
        bulkEmailsCount: 100,
        selected: false
      }),
      EmberObject.create({
        name: 'Gold',
        price: '495',
        usersCount: 1,
        bulkEmailsCount: 300,
        selected: false
      }),
      EmberObject.create({
        name: 'Enterprise',
        price: 'Talk to us',
        usersCount: 'Custom',
        bulkEmailsCount: 'Custom',
        selected: false
      })
    ]);
  }
});
