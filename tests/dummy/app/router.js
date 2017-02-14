import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('colors');
  this.route('inputs');
  this.route('components');
});

export default Router;
