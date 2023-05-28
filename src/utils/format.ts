import { intervalToDuration } from "date-fns";

export const formatCurrency = (price: number): string =>
  new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(price);

// e.g. 1234567890123456 => ["1234", "5678", "9012", "3456"]
const splitCreditCardNumber = (number: string): string[] => number.split(" ");

export const formatCreditCardNumber = (
  number: string,
  hidden: boolean
): string[] => {
  const splitted = splitCreditCardNumber(number);
  if (hidden) return ["••••", "••••", "••••", splitted.pop() || "••••"];

  return splitted;
};

// e.g. 'condom' => condoms
export const pluralize = (count: number, word: string): string =>
  count > 1 ? `${word}s` : word;

// e.g. 4 => 04
const fixedTens = (number: number) =>
  number < 10 ? `0${number}` : number.toString();

// e.g. 120 => 02:02
export const formatSeconds = (seconds: number) => {
  const duration = intervalToDuration({ start: 0, end: seconds * 1000 });

  return `${fixedTens(duration.minutes || 0)}:${fixedTens(
    duration.seconds || 0
  )}`;
};
