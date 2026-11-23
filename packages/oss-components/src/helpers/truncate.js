import Helper from '@ember/component/helper';

export function truncateHelper(params) {
  let [string, numberOfCharacters] = params;
  let remainingString = (string || '').slice(0, numberOfCharacters);

  return remainingString === string ? string : remainingString + '...';
}

export default Helper.helper(truncateHelper);
