export const millify = (number: number) => {
  if (number < 1000) return number.toString();

  const units = ["K", "M", "B", "T"];
  let unitIndex = -1;

  while (number >= 1000 && unitIndex < units.length - 1) {
    number /= 1000;
    unitIndex++;
  }

  return number+ units[unitIndex];
};
