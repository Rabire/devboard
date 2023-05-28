import { randFloat, randPastDate } from "@ngneat/falso";
import { Expense } from "../types";
import { formatCurrency } from "../format";
import MOCK_TRANSACTIONS from "../../static/mock-transactions";

const generateExpenses = (): Expense[] =>
  MOCK_TRANSACTIONS.map((expense) => {
    const fakeAmount = randFloat({
      min: -1000,
      max: 1000,
      precision: 0.01,
    });

    return {
      description: expense,
      amount: formatCurrency(fakeAmount),
      date: randPastDate(),
    };
  }).sort((a, b) => b.date.getTime() - a.date.getTime());

export default generateExpenses;
