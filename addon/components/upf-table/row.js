import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  tagName: 'tr',

  actions: {
    selectItem() {
      console.log(this.get('item'));
    }
  }
});
