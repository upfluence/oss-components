import { A } from '@ember/array';
import EmberObject from '@ember/object';
import Service from '@ember/service';

const MOCK_DATA = A([
  EmberObject.create({
    name: 'Bronze',
    price: '99',
    currency: 'EUR',
    usersCount: 1,
    bulkEmailsCount: 0,
    selected: false
  }),
  EmberObject.create({
    name: 'Silver',
    price: '195',
    currency: 'EUR',
    usersCount: 1,
    bulkEmailsCount: 100,
    selected: false
  }),
  EmberObject.create({
    name: 'Gold',
    price: '495',
    currency: 'EUR',
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

const DEFAULT_COLUMNS = [
  {
    title: 'Plan Name',
    property: 'name',
    type: 'text'
  },
  {
    title: 'Plan Price',
    property: 'price',
    type: 'money',
    currency_key: 'currency'
  },
  {
    title: 'Users Count',
    property: 'usersCount',
    type: 'numeric'
  },
  {
    title: 'Bulk Emails',
    property: 'bulkEmailsCount',
    type: 'numeric'
  }
];

export default Service.extend({
  fetch(columnsLayout) {
    return new Promise((resolve, reject) => {
      let columns = DEFAULT_COLUMNS;

      if (columnsLayout) {
        columns = columnsLayout;
        window.sessionStorage.setItem('columns', JSON.stringify(columns));
      } else if (!columnsLayout && window.sessionStorage.getItem('columns')) {
        columns = JSON.parse(window.sessionStorage.getItem('columns'));
      }

      setTimeout(() => {
        resolve({
          items: MOCK_DATA,
          meta: {
            columns: columns
          }
        });
      }, 1500)
    });
  }
});
