import Ember from 'ember';
import HeaderStyleMixin from 'oss-components/mixins/header-style';

export default Ember.Controller.extend(HeaderStyleMixin, {
  actions: {
    switchHeaderStyle: function() {
      var headerStyle = (this.get('headerStyle') === 'sidebar') ? 'topbar' : 'sidebar';
      this.set('headerStyle', headerStyle);
    }
  },
});
