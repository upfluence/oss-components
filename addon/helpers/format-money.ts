import Helper from '@ember/component/helper';

export const PREVENT_COMPACT_NOTATION_ON_RAW_BELOW = 1000;
export const PREVENT_COMPACT_NOTATION_ON_CENTS_BELOW = PREVENT_COMPACT_NOTATION_ON_RAW_BELOW * 100;

const _getFormatter = function (currency: string, compact?: boolean) {
  return Intl.NumberFormat(['en-EN', 'fr-FR'], {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: compact ? 1 : undefined,
    notation: compact ? 'compact' : undefined
  });
};

const _formatMoney = function (
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
  if (
    (amount < PREVENT_COMPACT_NOTATION_ON_RAW_BELOW && format === 'raw') ||
    (amount < PREVENT_COMPACT_NOTATION_ON_CENTS_BELOW && format === 'cents')
  )
    compact = false;
  return _formatMoney(amount, currency, format, compact);
}

export default Helper.helper(formatMoneyHelper);
