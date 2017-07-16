import Ember from 'ember';

export default Ember.Controller.extend({
  columns: [
    { title: 'Name', property: 'name' },
    { title: 'Media URL', property: 'media_url' },
    { title: 'Email', property: 'email' }
  ],

  tableColumns: [
    {
      'disableFiltering': true,
      'mayBeHidden': false,
      'component': 'data-table/select-row',
      'className': 'upf-table__row-selector'
    },
    {
      'propertyName': 'name',
      'title': 'Influencer',
      'grouped_with': 'media_url,email',
      'component': 'data-table/group-column',
    },
    {
      'propertyName': 'supplier_interest',
    },
    {
      'propertyName': 'selectability',
    },
    {
      'propertyName': 'proposed_price',
      'title': 'Negociated price',
      'icon': 'fa fa-money',
      'componentForSortCell': 'data-table/icon-header',
      'component': 'data-table/money-column',
    },
    {
      'propertyName': 'price',
      'title': 'Price',
      'icon': 'fa fa-handshake-o',
      'componentForSortCell': 'data-table/icon-header',
      'component': 'data-table/money-column',
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
    {
      'mayBeHidden': false,
      'title': 'Details',
      'template': 'components/models-table/expand-row-cell',
      'className': 'upf-align--center',
    },
  ],

  actions: {
    toggleSelect(record) {
      record.toggleProperty('isSelected');
      if (record.get('isSelected')) {
        window.alert(`${record.name} has been selected`);
      } else {
        window.alert(`${record.name} has been unselected`);
      }
    }
  },
});
