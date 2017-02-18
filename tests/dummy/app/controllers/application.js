import Ember from 'ember';
import HeaderStyleMixin from 'oss-components/mixins/header-style';

export default Ember.Controller.extend(HeaderStyleMixin, {
  headerStyle: 'topbar',

  mainContentContainerClass: Ember.computed('headerStyle', function() {
    if (this.get('headerStyle') === 'sidebar') {
      return 'col-xs-11 app-main--along-sidebar';
    } else {
      return 'col-xs-12 app-main--below-topbar';
    }
  }),

  actions: {
    switchHeaderStyle: function() {
      var headerStyle = (this.get('headerStyle') === 'sidebar') ? 'topbar' : 'sidebar';
      this.set('headerStyle', headerStyle);
    }
  },
});
