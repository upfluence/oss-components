import { debounce } from '@ember/runloop';
import Component from '@ember/component';
import RSVP from 'rsvp';
import { observer } from '@ember/object';
import Ember from 'ember';

const {
  TargetActionSupport
} = Ember;

const LoadingButtonComponent = Component.extend(TargetActionSupport, {
  tagName: 'button',
  classNameBindings: ['isLoading:js-btn--loading'],
  attributeBindings: ['disabled', 'title', 'data-control-name'],
  disabled: false,
  isLoading: false,
  initiallyDisabled: false,

  _: observer('isLoading', 'initiallyDisabled', function() {
    this._computeDisabled();
  }),

  _computeDisabled() {
    let disabled = !!(this.get('isLoading') || this.get('initiallyDisabled'));
    this.set('disabled', disabled);
  },

  didInsertElement() {
    this._computeDisabled();
  },

  click(e) {
    e.preventDefault();

    let originalWidth = this.$().width();

    // Because `.send` method for sending actions does not return anything, we
    // pass it an `RSVP.defer` to be resolved in the remote action.
    let defer = RSVP.defer();
    defer.promise.then(() => {
      this.$().removeAttr('style');
      this.set('isLoading', false);
    });

    debounce(this, function() {
      this.set('isLoading', true);
      this.$().width(originalWidth);

      this.triggerAction({
        action: this.get('slowAction'),
        actionContext: [this.get('params'), defer]
      });
    }, 100);
  }
});

LoadingButtonComponent.reopenClass({
  positionalParams: 'params'
});

export default LoadingButtonComponent;
