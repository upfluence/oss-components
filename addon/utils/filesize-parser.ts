function validSize(n: string) {
  return !isNaN(parseFloat(n)) && isFinite(parseInt(n));
}

function parsableUnit(u: string) {
  return u.match(/\D*/)?.pop() === u;
}

const INCREMENT_BASE: any = [
  [['B'], 1],
  [['KB'], 1000],
  [['MB'], 1.0e6],
  [['GB'], 1.0e9]
];

export default function parseFilesize(filesize: string) {
  const parsed = filesize.toString().match(/^([0-9\.,]*)(?:\s*)?(.*)$/);

  if (!parsed || !parsed[1] || !parsed[2]) {
    throw new Error('[filesize-parser] Could not parse the filesize provided');
  }

  const size: string = parsed[1].replace(',', '.');
  const unit: string = parsed[2];
  const validUnit = function (sourceUnit: string) {
    return sourceUnit === unit;
  };

  if (!validSize(size) || !parsableUnit(unit)) {
    throw new Error(`[filesize-parser] Can't interpret ${filesize || 'a blank string'}`);
  }

  if (unit === '') return Math.round(Number(size));

  for (let i = 0; i < INCREMENT_BASE.length; i++) {
    const _increment = INCREMENT_BASE[i];

    if (_increment[0].some(validUnit)) {
      return Math.round(parseInt(size) * _increment[1]);
    }
  }

  throw new Error(`${unit} doesn't appear to be a valid unit`);
}

export function humanizeFilesize(bytes: number): string {
  const threshold = 1000;

  if (Math.abs(bytes) < threshold) {
    return bytes + ' B';
  }

  const units = ['KB', 'MB', 'GB'];
  let unitIndex = -1;
  const roundValue = 10;

  do {
    bytes /= threshold;
    ++unitIndex;
  } while (Math.round(Math.abs(bytes) * roundValue) / roundValue >= threshold && unitIndex < units.length - 1);

  return bytes.toFixed(1) + units[unitIndex];
}
