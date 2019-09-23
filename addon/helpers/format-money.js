import Helper from '@ember/component/helper';

var _getFormatter = function(currency) {
  return Intl.NumberFormat(['en-EN', 'fr-FR'], {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0, // show decimals only if there are ones
  });
};

var _formatMoney = function(amount, currency) {
  if (isNaN(parseInt(amount)) || !currency) return amount;
  return _getFormatter(currency).format(parseFloat(amount));
};


export function formatMoneyHelper(params) {
  let [amount, currency] = params;
  return _formatMoney(amount, currency);
}

export default Helper.helper(formatMoneyHelper);
