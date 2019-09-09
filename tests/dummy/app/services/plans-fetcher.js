import { A } from '@ember/array';
import EmberObject from '@ember/object';
import Service from '@ember/service';
import { isEmpty } from '@ember/utils';

const MOCK_DATA = A([
  EmberObject.create({
    name: 'Bronze',
    price: 99,
    currency: 'EUR',
    usersCount: 1,
    bulkEmailsCount: 0,
    selected: false,
    data1: 'A',
    data2: 1620563995
  }),
  EmberObject.create({
    name: 'Silver',
    price: 195,
    currency: 'EUR',
    usersCount: 1,
    bulkEmailsCount: 100,
    selected: false,
    data1: 'B',
    data2: 1554800754
  }),
  EmberObject.create({
    name: 'Gold',
    price: 495,
    currency: 'EUR',
    usersCount: 1,
    bulkEmailsCount: 300,
    selected: false,
    data1: 'C',
    data2: 1365498354
  }),
  EmberObject.create({
    name: 'Enterprise',
    price: 'Talk to us',
    usersCount: 'Custom',
    bulkEmailsCount: 'Custom',
    selected: false,
    data1: 'D',
    data2: 1383987954
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
  },
  {
    title: 'Data 1',
    property: 'data1',
    type: 'text'
  },
  {
    title: 'Data 2',
    property: 'data2',
    type: 'date'
  },
  {
    title: 'Data 3',
    property: 'data3',
    type: 'numeric'
  },
  {
    title: 'Data 4',
    property: 'data4',
    type: 'numeric'
  },
  {
    title: 'Data 5',
    property: 'data5',
    type: 'numeric'
  },
  {
    title: 'Data 6',
    property: 'data6',
    type: 'numeric'
  },
];

export default Service.extend({
  fetch(columnsLayout) {
    return new Promise((resolve, reject) => {
      let columns = DEFAULT_COLUMNS;
      let data = A(
        MOCK_DATA.concat(MOCK_DATA).concat(MOCK_DATA).concat(MOCK_DATA)
      );

      if (columnsLayout) {
        columns = columnsLayout;
        window.sessionStorage.setItem('columns', JSON.stringify(columns));
      } else if (!columnsLayout && window.sessionStorage.getItem('columns')) {
        columns = JSON.parse(window.sessionStorage.getItem('columns'));
      }

      let sortedColumn = columns.find((x) => !isEmpty(x.sortBy));

      if (sortedColumn) {
        let [sortType, sortDirection] = sortedColumn.sortBy.split(':');
        data = data.sortBy(sortedColumn.property);

        if (sortDirection === 'desc') {
          data.reverse();
        }
      }

      setTimeout(() => {
        resolve({
          items: data,
          meta: {
            columns: columns
          }
        });
      }, 1500)
    });
  }
});
