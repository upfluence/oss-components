export function hexToRGB(hex: string): string {
  hex = hex.replace('#', '');

  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((char) => char + char)
      .join('');
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgb(${r}, ${g}, ${b})`;
}

export function CSSVariableToRGB(variable: string): string {
  const rootStyles = getComputedStyle(document.documentElement);
  const colorValue = rootStyles.getPropertyValue(variable).trim();

  if (colorValue.startsWith('rgb(')) {
    return colorValue;
  } else if (colorValue.startsWith('rgba(')) {
    return colorValue.replace('rgba', 'rgb').replace(', 1)', ')');
  } else if (colorValue.startsWith('#')) {
    return hexToRGB(colorValue);
  } else {
    throw new Error(`Unsupported color format: ${colorValue}`);
  }
}
