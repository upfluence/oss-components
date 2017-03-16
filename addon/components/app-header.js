import Ember from 'ember';
import HeaderStyleMixin from 'oss-components/mixins/header-style';

const {
  Component,
  computed
} = Ember;

export default Component.extend(HeaderStyleMixin, {
  tagName: 'nav',
  classNameBindings: ['headerStyleClass'],

  headerStyleClass: Ember.computed('headerStyle', function() {
    if (this.get('isSidebarStyle')) {
      return 'col-xs-1 app-header--sidebar';
    } else {
      return 'col-xs-12 app-header--topbar';
    }
  }),

  randomFullLogo: computed(function() {
    let logos = [
      'air-1-white', 'earth-3-white', 'fire-2-white',
      'water-1-white','water-2-white','water-3-white',
    ]

    return logos[Math.floor(Math.random() * logos.length)];
  })

});
