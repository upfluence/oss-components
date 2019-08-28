import Helper from '@ember/component/helper';

export function formatNumericHelper(params) {
  let [number] = params;
  let formatter = Intl.NumberFormat(['en-EN', 'fr-FR'], {
    style: 'decimal',
    minimumFractionDigits: 0, // show decimals only if there are ones
  });

  if (isNaN(parseInt(number))) return number;
  return formatter.format(number);
}

export default Helper.helper(formatNumericHelper);
