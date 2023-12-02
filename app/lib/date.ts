export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const certmonths = [
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

export function getCertFormattedDate(date: Date): string {
  return `${date.getDate()} ${certmonths[date.getMonth()]}, ${date.getFullYear()}`;
}