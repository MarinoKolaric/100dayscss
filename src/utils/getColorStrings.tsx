export const getColorStrings = (currentDay: string): [string, string] => {
  let str1 = 'day';

  const day: number = Number(currentDay.match(/\d+/g)?.toString());
  if (isNaN(day)) return ['#000', '#000'];

  return [`${str1}${day - 1}`, `${str1}${day + 1}`];
};
