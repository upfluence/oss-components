import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  plansFetcher: service(),
  upfTableState: service(),

  collection: [],
  columns: [],

  tableOptions: {
    features: {
      search: true,
      selection: true
    }
  },

  init() {
    this._super();
    this._fetchPlans();
  },

  _fetchPlans() {
    this.set('refreshing', true);

    this.plansFetcher.fetch().then((data) => {
      this.set('collection', data.items);
      this.set('tableManager', this.upfTableState.createTable());
      this.tableManager.updateColumns(data.meta.columns);
    }).finally(() => {
      this.set('refreshing', false);
    });
  },

  actions: {
    columnsChanged(layout) {
      this.plansFetcher.fetch(layout).then((data) => {
        this.set('collection', data.items);
      });
    },

    performSearch(s) {
      alert(`Search: ${s}`);
    }
  }
});
