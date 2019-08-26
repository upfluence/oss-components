import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  plansFetcher: service(),

  collection: [],
  columns: [],

  init() {
    this._super();
    this._fetchPlans();
  },

  _fetchPlans(columnsLayout) {
    this.set('refreshing', true);

    this.plansFetcher.fetch().then((data) => {
      this.set('collection', data.items);
      this.set('columns', data.meta.columns);
    }).finally(() => {
      this.set('refreshing', false);
    });
  },

  actions: {
    columnsChanged(layout) {
      this.plansFetcher.fetch(layout);
    }
  }
});
