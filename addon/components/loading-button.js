import Ember from 'ember';

const {
  Component,
  RSVP,
  TargetActionSupport
} = Ember;

const LoadingButtonComponent = Component.extend(TargetActionSupport, {
  tagName: 'button',
  classNameBindings: ['isLoading:js-btn--loading'],
  attributeBindings: ['disabled', 'isLoading:disabled'],

  click(e) {
    e.preventDefault();

    let originalContent = this.$().html();
    let originalWidth = this.$().width();

    // Because `.send` method for sending actions does not return anything, we
    // pass it an `RSVP.defer` to be resolved in the remote action.
    let defer = RSVP.defer();
    defer.promise.then(() => {
      this.$().removeAttr('style');
      this.set('isLoading', false);
      this.$().html(originalContent);
    });

    Ember.run.debounce(this, function() {
      this.set('isLoading', true);
      this.$().width(originalWidth);
      this.$().html("<i class='fa fa-circle-o-notch fa-spin'></i>");

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
