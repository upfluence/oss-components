import Ember from 'ember';

export default Ember.Controller.extend({
  columns: [
    { title: 'Name', property: 'name' },
    { title: 'Media URL', property: 'media_url', visible: false },
    { title: 'Actions', component: 'table-actions' },
    { title: 'Email', property: 'email', sorted: true },
    { title: 'Selectability', property: 'selectability' },
    { title: 'Proposed Price', property: 'proposed_price' },
    { title: 'Selected', property: 'isSelected' }
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
