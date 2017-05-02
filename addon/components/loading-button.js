import Ember from 'ember';

const {
  Component,
  RSVP
} = Ember;

const LoadingButtonComponent = Component.extend({
  tagName: 'button',

  click(e) {
    e.preventDefault();
    console.log(this.get('params'))

    // Because `.send` method for sending actions does not return anything, we
    // pass it an `RSVP.defer` to be resolved in the remote action.
    let defer = RSVP.defer();
    defer.promise.then(() => {
      this.$().text(this.get('originalContent'));
    }, () => {

    });

    Ember.run.debounce(this, function() {
      this.$().width(this.$().width());
      this.set('originalContent', this.$().html());
      this.$().html("<i class='fa fa-circle-o-notch fa-spin'></i>");

      this.get('targetObject').send(
        this.get('slowAction'),
        this.get('params'),
        defer
      );
    }, 100);
  }
});

LoadingButtonComponent.reopenClass({
  positionalParams: 'params'
});

export default LoadingButtonComponent;
