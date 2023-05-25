const capitalizeFirstLetter = (string: string): string =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const formatFakerExpense = (string: string): string =>
  capitalizeFirstLetter(string).split(" using")[0];

export const formatCurrency = (price: number): string =>
  new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(price);

// split string of 16 numbers into 4 groups of 4 numbers
// e.g. 1234567890123456 => ["1234", "5678", "9012", "3456"]
const splitCreditCardNumber = (number: string): string[] =>
  number.match(/.{1,4}/g) || [];

export const formatCreditCardNumber = (
  number: string,
  hidden: boolean
): string => {
  const splitted = splitCreditCardNumber(number);

  if (hidden) return `•••• •••• •••• ${splitted.pop()}`;

  return splitted.join(" ");
};