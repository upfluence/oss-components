import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('colors', { path: '/colors'});
  this.route('inputs', { path: '/inputs'});
  this.route('components', { path: '/components'});
});

export default Router;
