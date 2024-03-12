export function isDarkColor(color) {

  const rgb = parseInt(color.substring(1), 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >>  8) & 0xff;
  const b = (rgb >>  0) & 0xff;

   const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  return luminance < 128;
}