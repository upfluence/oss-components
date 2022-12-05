import Helper from '@ember/component/helper';

var _getFormatter = function (currency: string) {
  return Intl.NumberFormat(['en-EN', 'fr-FR'], {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0 // show decimals only if there are ones
  });
};

var _formatMoney = function (amount: string, currency: string, format: 'raw' | 'cents' = 'raw') {
  if (isNaN(parseInt(amount)) || !currency) return amount;
  const value = format === 'cents' ? parseFloat(amount) / 100 : parseFloat(amount);
  return _getFormatter(currency).format(value);
};

export function formatMoneyHelper(params: any[]) {
  let [amount, currency, format] = params;
  return _formatMoney(amount, currency, format);
}

export default Helper.helper(formatMoneyHelper);
