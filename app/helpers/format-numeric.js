import Helper from '@ember/component/helper';

var _getFormatter = function(currency) {
  return Intl.NumberFormat(['en-EN', 'fr-FR'], {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0, // show decimals only if there are ones
  });
};

var _formatMoney = function(amount, currency) {
  if (amount > 0) {
    return _getFormatter(currency).format(parseFloat(amount));
  } else {
    return '--';
  }
};


export function formatNumericHelper(params) {
  let [number] = params;
  let formatter = Intl.NumberFormat(['en-EN', 'fr-FR'], {
    style: 'decimal',
    minimumFractionDigits: 0, // show decimals only if there are ones
  });

  if(number > 0) {
    return formatter.format(number);
  } else {
    return '--';
  }
}

export default Helper.helper(formatNumericHelper);
