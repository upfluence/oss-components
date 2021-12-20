/* global Countdown */
import { debounce } from '@ember/runloop';

import Component from '@ember/component';
import RSVP from 'rsvp';
import Ember from 'ember';

const { TargetActionSupport } = Ember;

export default Component.extend(TargetActionSupport, {
  tagName: 'button',
  classNames: ['upf-btn', 'upf-btn--destructive'],
  attributeBindings: ['disabled', 'title', 'data-control-name'],

  actionFailed: false,
  isLoading: false,
  isSuccess: false,
  defer: RSVP.defer(),

  setButtonState() {
    this.set('isSuccess', false);
    this.set('actionFailed', false);
    this.set('seconds', 0);

    if (this.get('isLoading')) {
      this.get('countdown').abort();
      this.set('isLoading', false);
    } else {
      this.set('isLoading', true);

      this.set(
        'countdown',
        new Countdown(
          5,
          (seconds) => this.set('seconds', seconds),
          () => {
            this.triggerAction({
              action: this.get('destructiveAction'),
              actionContext: [this.get('record'), this.defer]
            });
          }
        )
      );
    }
  },

  click: function (e) {
    e.preventDefault();

    // Because `.send` method for sending actions does not return anything, we
    // pass it an `RSVP.defer` to be resolved in the remote action.
    this.defer.promise.then(
      () => {
        this.set('isLoading', false);
        this.set('isSuccess', true);
      },
      () => {
        this.set('isLoading', false);
        this.set('actionFailed', true);
      }
    );

    debounce(this, this.setButtonState, 100);
  }
});
