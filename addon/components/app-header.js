import Ember from 'ember';
import HeaderStyleMixin from 'oss-components/mixins/header-style';

export default Ember.Component.extend(HeaderStyleMixin, {
  tagName: 'nav',
  classNameBindings: ['headerStyleClass'],

  headerStyleClass: Ember.computed('headerStyle', function() {
    if (this.get('isSidebarStyle')) {
      return 'col-xs-1 app-header--sidebar';
    } else {
      return 'col-xs-12 app-header--topbar';
    }
  }),

});
