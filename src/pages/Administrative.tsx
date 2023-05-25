import { faker } from "@faker-js/faker";
import { endOfYear } from "date-fns";
import ProgressBarSection from "../components/ProgressBarSection";
import ExpensesSection from "../components/ExpensesSection";
import CreditCard from "../components/CreditCard";
import AdministrationButtons from "../components/AdministrationButtons";
import FilesSlider from "../components/FilesSlider";
import DoughnutSection from "../components/DoughnutSection";
import IncomeAndSpendsChart from "../components/IncomeAndSpendsChart";

const Administrative = () => (
  <main className="grid-cols-[1fr_400px]">
    <div className="grid grid-rows-[2fr_1fr_1fr] grid-cols-2 gap-5 max-h-content">
      {/* <DoughnutSection type="incomes" /> */}
      <DoughnutSection />

      <IncomeAndSpendsChart />

      <div className="col-span-2 grid grid-cols-[2fr_4fr] gap-5">
        <AdministrationButtons />
        <ProgressBarSection
          subTitle="Objectifs"
          title="Semestre 2 - 65 000€"
          percentage={faker.number.int(100)}
          deadline={endOfYear(new Date())}
        />
      </div>

      <FilesSlider />
    </div>

    <div className="flex flex-col gap-5 max-h-content">
      <CreditCard />
      <ExpensesSection />
    </div>
  </main>
);

export default Administrative;
