import Ember from 'ember';

export default Ember.Controller.extend({
  lorem: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed ' +
    'do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ' +
    ' ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
    'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ' +
    'in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ' +
    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui ' +
    'officia deserunt mollit anim id est laborum.',

  tableColumns: [
    {
      'propertyName': 'id',
    },
    {
      'propertyName': 'supplier_interest',
    },
    {
      'propertyName': 'selectability',
    },
    {
      'propertyName': 'price',
      'title': 'Price',
      'icon': 'fa fa-handshake-o',
      'componentForSortCell': 'data-table/icon-header',
    },
    {
      'propertyName': 'proposed_price',
      'title': 'Negociated price',
      'icon': 'fa fa-money',
      'componentForSortCell': 'data-table/icon-header',
    },
    {
      'propertyName': 'comment',
      'title': 'Comment',
      'icon': 'fa fa-commenting',
      'componentForSortCell': 'data-table/icon-header',
    },
    {
      'propertyName': 'visible_by_client',
      'title': 'Visible by client',
      'icon': 'fa fa-user-secret upf-icon-group__superior--visibility',
      'componentForSortCell': 'data-table/icon-header',
      'component': 'data-table/switchable-boolean-column'
    },
    {
      'propertyName': 'client_approved_for_drafting',
      'title': 'Client approved for drafting',
      'icon': 'fa fa-user-secret upf-icon-group__superior--edit',
      'componentForSortCell': 'data-table/icon-header',
      'component': 'data-table/switchable-boolean-column'
    },
    {
      'propertyName': 'admin_approved_for_drafting',
      'title': 'Admin approved for drafting',
      'icon': 'fa fa-user upf-icon-group__superior--edit',
      'componentForSortCell': 'data-table/icon-header',
      'component': 'data-table/switchable-boolean-column',
    },
  ],
});
