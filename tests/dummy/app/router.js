import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('typography');
  this.route('icons');
  this.route('inputs');
  this.route('buttons');
  this.route('text-editor');
  this.route('data-table');
  this.route('patterns', function() {
    this.route('stats');
  });
});

export default Router;
