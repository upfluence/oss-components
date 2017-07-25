import Ember from 'ember';

const {
  Helper,
} = Ember;


export function truncateHelper(params) {
  let [string, numberOfCharacters] = params;
  let remainingString = string.slice(0, numberOfCharacters);

  return (remainingString === string) ? string : remainingString + '...';
}

export default Helper.helper(truncateHelper);
