export const padLeft: (num: number, targetLength: number) => string = (
  num,
  targetLength = 2
) => {
  return num.toString().padStart(targetLength, '0');
};

export const kFormatter: (num: number) => string = (num) => {
  return Math.abs(num) > 999 ? (num / 1000).toFixed(1) + 'K' : num.toString();
};
