import Ember from 'ember';

export default Ember.Controller.extend({
  columns: [
    { title: 'Name', property: 'name' },
    { title: 'Media URL', property: 'media_url', visible: false },
    { title: 'Email', property: 'email', sorted: true },
    { title: 'selectability', property: 'selectability' },
    { title: 'fff', property: 'client_approved_for_drafting' },
    { title: 'popopo', property: 'proposed_price' },
    { title: 'selected', property: 'isSelected' }
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
