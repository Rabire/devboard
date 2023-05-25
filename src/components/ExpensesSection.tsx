import generateExpense from "../utils/faker/expenses";
import Expense from "./Expense";

const expenses = Array.from({ length: 50 }, generateExpense).sort(
  (a, b) => b.date.getTime() - a.date.getTime()
);
const ExpensesSection = () => (
  <section className="flex-1 overflow-scroll p-0 relative">
    <h2 className="sticky top-0 p-5 bg-secondary z-10">Relevé de compte</h2>

    <div className="px-5">
      {expenses.map((expense, i) => (
        <Expense key={i} expense={expense} />
      ))}
    </div>
  </section>
);

export default ExpensesSection;
