import {
  randCreditCardCVV,
  randCreditCardNumber,
  randFirstName,
  randFutureDate,
  randLastName,
} from "@ngneat/falso";

const generateCreditCard = () => ({
  ccv: randCreditCardCVV(),
  number: randCreditCardNumber({ brand: "Visa" }),
  expirationDate: randFutureDate(),
  name: `${randFirstName()} ${randLastName().toUpperCase()}`,
});

export default generateCreditCard;
