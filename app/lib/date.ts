export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export function getFormattedDate(date: Date): string {
  return `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`;
}