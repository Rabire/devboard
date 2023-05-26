import generateExpense from "../utils/faker/expenses";
import Expense from "./Expense";

const expenses = Array.from({ length: 50 }, generateExpense).sort(
  (a, b) => b.date.getTime() - a.date.getTime()
);
const ExpensesSection = () => (
  <section className="desktop:row-span-3 overflow-scroll p-0 relative max-h-content">
    <h2 className="section-header">Relevé de compte</h2>

    <div className="px-5">
      {expenses.map((expense, i) => (
        <Expense key={i} expense={expense} />
      ))}
    </div>
  </section>
);

export default ExpensesSection;
