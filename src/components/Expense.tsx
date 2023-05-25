import { format } from "date-fns";
import { Expense as ExpenseType } from "../utils/types";

type Props = { expense: ExpenseType };

const Expense = ({ expense }: Props) => (
  <div className="border-bottom p-2.5 flex gap-5 items-center justify-between">
    <div className="overflow-hidden">
      <p className="truncate">{expense.description}</p>
      <p className="opacity-50 text-xs">
        {format(expense.date, "dd/MM/yyyy - kk:mm")}
      </p>
    </div>
    <div className="font-bold whitespace-nowrap">{expense.amount}</div>
  </div>
);

export default Expense;
