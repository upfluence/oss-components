import Helper from '@ember/component/helper';

var _getFormatter = function (currency: string, compact?: boolean) {
  return Intl.NumberFormat(['en-EN', 'fr-FR'], {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0, // show decimals only if there are ones
    maximumFractionDigits: compact ? 1 : undefined, // show only one decimal in compact mode
    notation: compact ? 'compact' : undefined
  });
};

var _formatMoney = function (
  amount: string,
  currency: string,
  format: 'raw' | 'cents' = 'raw',
  compact: boolean = false
) {
  if (isNaN(parseInt(amount)) || !currency) return amount;
  const value = format === 'cents' ? parseFloat(amount) / 100 : parseFloat(amount);
  return _getFormatter(currency, compact).format(value);
};

export function formatMoneyHelper(params: any[]) {
  const [amount, currency, format = 'raw', compact = false] = params;
  return _formatMoney(amount, currency, format, compact);
}

export default Helper.helper(formatMoneyHelper);
