import Ember from 'ember';

const { get } = Ember;

export default Ember.Component.extend({
  _receivedValue: Ember.computed('record', 'column.propertyName', function() {
    return get(this.get('record'), this.get('column.propertyName'));
  }),

  _getFormatter: function(currency) {
    return Intl.NumberFormat(['en-EN', 'fr-FR'], {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0, // show decimals only if there are ones
    });
  },

  formattedMoney: Ember.computed('_receivedValue', function() {
    if (this.get('_receivedValue')) {
      var value, currency;
      [value, currency] = this.get('_receivedValue').split(' ');

      return this._getFormatter(currency).format(parseFloat(value));
    }
  }),
});
