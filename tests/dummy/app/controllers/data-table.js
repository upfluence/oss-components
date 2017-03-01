export default Ember.Controller.extend({
  tableColumns: [
    {
      'disableFiltering': true,
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
      'propertyName': 'comment',
      'title': 'Comment',
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

  actions: {
    toggleSelect(record) {
      record.toggleProperty('isSelected')
      if (record.get('isSelected')) {
        alert(`${record.name} has been selected`)
      } else {
        alert(`${record.name} has been unselected`)
      }
    }
  },
});
