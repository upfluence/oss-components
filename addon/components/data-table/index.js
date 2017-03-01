import ModelsTableComponent from 'ember-models-table/components/models-table';

export default ModelsTableComponent.extend({
  useFilteringByColumns: false,
  filteringIgnoreCase: true,

  customMessages: {
    'searchLabel': '',
    'searchPlaceholder': 'Search in the table',
    'columns-title': 'Displayed columns',
  },

  customClasses: {
    'buttonDefault': 'btn upf-btn--purple--reversed',
    'columnsDropdown': 'dropdown-menu pull-right upf-dropdown',
    'input': 'form-control upf-input',
    'table': 'table upf-table',
    'clearFilterIcon': 'fa fa-times',
    'clearAllFiltersIcon': 'fa fa-times-circle-o',
  },

  customIcons: {
    'caret': 'fa fa-caret-down',
    'column-visible': 'fa fa-dot-circle-o',
    'column-hidden': 'fa fa-circle-o',
    'nav-first': 'fa fa-chevron-left',
    'nav-prev': 'fa fa-arrow-left',
    'nav-next': 'fa fa-arrow-right',
    'nav-last': 'fa fa-chevron-right',
    'sort-asc': 'fa fa-sort-asc',
    'sort-desc': 'fa fa-sort-desc'
  },

  actions: {
    selectRecord(record) {
      this.get('targetObject').send(this.get('selectRecord'), record)
    },
  }
});
