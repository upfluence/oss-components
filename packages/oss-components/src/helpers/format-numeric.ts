import Helper from '@ember/component/helper';

export function formatNumericHelper(params: any[]) {
  const [number] = params;
  const formatter = Intl.NumberFormat(['en-EN', 'fr-FR'], {
    style: 'decimal',
    minimumFractionDigits: 0
  });

  if (isNaN(parseInt(number))) return number;
  return formatter.format(number);
}

export default Helper.helper(formatNumericHelper);
