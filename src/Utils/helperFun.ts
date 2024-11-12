export const getRandomColor = () => {
  // Generate random values for red, green, and blue
  const r = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
  const g = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
  const b = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');

  // Concatenate into a hex color string
  return `#${r}${g}${b}`;
};
