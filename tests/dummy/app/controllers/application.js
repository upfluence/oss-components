import Ember from 'ember';

export default Ember.Controller.extend({
  headerStyle: 'topbar',

  menuItems: [
    {
      route: 'colors',
      icon: 'fa-paint-brush',
      title: 'OSS Colors',
    },
    {
      route: 'inputs',
      icon: 'fa-check-square',
      title: 'OSS Forms',
    },
    {
      route: 'components',
      icon: 'fa-sitemap',
      title: 'OSS Components',
    },
  ],

  actions: {
    switchHeaderStyle: function() {
      var headerStyle = (this.get('headerStyle') === 'sidebar') ? 'topbar' : 'sidebar';
      console.log(headerStyle);
      this.set('headerStyle', headerStyle);
    }
  },
});
