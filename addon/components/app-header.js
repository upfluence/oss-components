import Component from '@ember/component';
import { computed } from '@ember/object';
import HeaderStyleMixin from '@upfluence/oss-components/mixins/header-style';

export default Component.extend(HeaderStyleMixin, {
  tagName: 'nav',
  classNameBindings: ['headerStyleClass'],
  logo: null,
  //TODO: check if used somewhere
  indexRoute: 'index',

  headerStyleClass: computed('headerStyle', 'isSidebarStyle', function () {
    if (this.get('isSidebarStyle')) {
      return 'col-xs-1 app-header--sidebar';
    } else {
      return 'col-xs-12 app-header--topbar';
    }
  }),

  hasLogo: computed('logo', function () {
    return this.get('logo') !== null;
  })
});
