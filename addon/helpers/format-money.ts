import Helper from '@ember/component/helper';

let _getFormatter = function (currency: string, compact?: boolean) {
  return Intl.NumberFormat(['en-EN', 'fr-FR'], {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: compact ? 1 : undefined,
    notation: compact ? 'compact' : undefined
  });
};

let _formatMoney = function (
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
  let [amount, currency, format = 'raw', compact = false] = params;
  if ((amount < 1000 && format === 'raw') || (amount < 100000 && format === 'cents')) compact = false;
  return _formatMoney(amount, currency, format, compact);
}

export default Helper.helper(formatMoneyHelper);
