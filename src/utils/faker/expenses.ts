import { faker } from "@faker-js/faker";
import { Expense } from "../types";
import { formatFakerExpense, formatCurrency } from "../format";

const generateExpense = (): Expense => {
  const fakeAmount = faker.number.float({
    min: -1000,
    max: 1000,
    precision: 0.01,
  });

  const fakeDescription = faker.finance.transactionDescription();

  return {
    description: formatFakerExpense(fakeDescription),
    amount: formatCurrency(fakeAmount),
    date: faker.date.past(),
  };
};

export default generateExpense;
