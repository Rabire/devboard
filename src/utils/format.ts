export const capitalizeFirstLetter = (string: string): string =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const formatFakerExpense = (string: string): string =>
  capitalizeFirstLetter(string).split(" using")[0];

export const formatPrice = (price: number): string =>
  new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(price);
