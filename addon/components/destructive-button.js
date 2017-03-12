import Ember from 'ember';

const { Component, RSVP } = Ember;

export default Component.extend({
  tagName: 'button',
  classNames: ['upf-btn', 'upf-btn--destructive'],

  clickedToDelete: false,
  actionFailed: false,

  click: function(e) {
    e.preventDefault();

    // Because `.send` method for sending actions does not return anything, we
    // pass it an `RSVP.defer` to be resolved in the remote action.
    let defer = RSVP.defer();
    defer.promise.then( () => {
      this.$().text(this.get('successMessage'));
    }, () => {
      this.set('clickedToDelete', false);
      this.set('actionFailed', true);
      this.$().html(
        `<i class='fa fa-refresh'></i> &nbsp; ${this.get('failureMessage')}`
      );
    });

    Ember.run.debounce(this, function() {
      if (this.get('clickedToDelete')) {
        this.set('clickedToDelete', false);
        this.set('actionFailed', false);
        this.get('countdown').abort();

        this.$().html(this.get('originalContent'));
      } else {
        this.set('clickedToDelete', true);
        this.set('originalContent', this.$().html());

        this.set('countdown', new Countdown(5, function(seconds) {
          this.$().text(`${this.get('ongoingMessage')} ( ${seconds} )...`);
        }.bind(this), function() {
          this.get('targetObject').send(
            this.get('destructiveAction'),
            this.get('record'),
            defer
          );
        }.bind(this)));
      }
    }, 100);
  }
});
