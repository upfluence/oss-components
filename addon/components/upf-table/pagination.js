import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'span',
  classNames: ['margin-left-xx-sm'],
  currentPage: 1,
  totalPages: 1,
  perPage: 1,
  itemTotal: 0,
  itemCount: 0,
  itemName: '',
  didPageChange: '',

  previousPage: computed('currentPage', function() {
    return this.get('currentPage') - 1;
  }),

  nextPage: computed('currentPage', function() {
    return this.get('currentPage') + 1;
  }),

  hasNext: computed('nextPage', 'totalPages', function() {
    return this.get('nextPage') <= this.get('totalPages');
  }),

  hasPrevious: computed('previousPage', 'totalPages', function() {
    return this.get('previousPage') >= 1;
  }),

  from: computed('currentPage', 'perPage', function() {
    return (this.get('currentPage') - 1) * this.get('perPage') + 1;
  }),

  to: computed('from', 'itemCount', function() {
    return (this.get('from') + this.get('itemCount')) - 1;
  }),

  _triggerChange(page) {
    this.triggerAction({
      action: 'didPageChange',
      actionContext: [page]
    });
  },

  actions: {
    previousPage() {
      if (!this.get('hasPrevious')) {
        return;
      }

      this._triggerChange(this.get('previousPage'));
    },

    nextPage() {
      if (!this.get('hasNext')) {
        return;
      }

      this._triggerChange(this.get('nextPage'));
    }
  }
});
