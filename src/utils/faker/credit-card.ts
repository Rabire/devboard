import { faker } from "@faker-js/faker";

const generateCreditCard = () => ({
  ccv: faker.finance.creditCardCVV(),
  number: faker.string.numeric(16),
  expirationDate: faker.date.future(),
  name: `${faker.person.firstName()} ${faker.person.lastName().toUpperCase()}`,
});

export default generateCreditCard;
