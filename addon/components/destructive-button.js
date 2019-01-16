/* global Countdown */
import { debounce } from '@ember/runloop';

import Component from '@ember/component';
import RSVP from 'rsvp';
import Ember from 'ember';

const {
  TargetActionSupport
} = Ember;

export default Component.extend(TargetActionSupport, {
  tagName: 'button',
  classNames: ['upf-btn', 'upf-btn--destructive'],
  attributeBindings: ['disabled', 'title'],

  actionFailed: false,
  isLoading: false,
  isSuccess: false,

  click: function(e) {
    e.preventDefault();

    // Because `.send` method for sending actions does not return anything, we
    // pass it an `RSVP.defer` to be resolved in the remote action.
    let defer = RSVP.defer();
    defer.promise.then( () => {
      this.set('isLoading', false);
      this.set('isSuccess', true);
    }, () => {
      this.set('isLoading', false);
      this.set('actionFailed', true);
    });

    debounce(this, function() {
      this.set('isSuccess', false);
      this.set('actionFailed', false);
      this.set('seconds', 0);

      if (this.get('isLoading')) {
        this.get('countdown').abort();
        this.set('isLoading', false);
      } else {
        this.set('isLoading', true);

        this.set('countdown', new Countdown(5,
          (seconds) => this.set('seconds', seconds),
          () => {
            this.triggerAction({
              action: this.get('destructiveAction'),
              actionContext: [this.get('record'), defer]
            });
         })
        );
      }
    }, 100);
  }
});
