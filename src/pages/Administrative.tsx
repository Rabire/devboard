import { randNumber } from "@ngneat/falso";
import { endOfYear } from "date-fns";
import ProgressBarSection from "../components/ProgressBarSection";
import ExpensesSection from "../components/ExpensesSection";
import CreditCard from "../components/CreditCard";
import AdministrationButtons from "../components/AdministrationButtons";
import DoughnutSection from "../components/DoughnutSection";
import IncomeAndSpendsChart from "../components/IncomeAndSpendsChart";

const Administrative = () => (
  <main className="grid-rows-[auto_1fr_auto]">
    <ProgressBarSection
      subTitle="Objectifs"
      title="Semestre 2 - 65 000€"
      percentage={randNumber({ max: 100 })}
      deadline={endOfYear(new Date())}
    />
    <CreditCard />

    <ExpensesSection />

    <div className="flex gap-5 flex-col desktop:flex-row tablet:col-span-1 desktop:col-span-2">
      <DoughnutSection type="incomes" />
      <DoughnutSection type="turnover" />
    </div>

    <IncomeAndSpendsChart />
    <AdministrationButtons />
  </main>
);

export default Administrative;
