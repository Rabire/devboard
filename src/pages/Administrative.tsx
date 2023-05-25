import { faker } from "@faker-js/faker";
import { endOfYear } from "date-fns";
import ProgressBarSection from "../components/ProgressBarSection";
import ExpensesSection from "../components/ExpensesSection";
import CreditCard from "../components/CreditCard";

const Administrative = () => (
  <main className="grid-cols-[6fr_3fr] gap-5">
    <div className="grid grid-rows-[2fr_1fr_2fr_1fr] grid-cols-2 gap-5 max-h-content">
      <section>Revenus par clients</section>
      <section>Chiffre d’affaire</section>

      <div className="col-span-2 grid grid-cols-[2fr_4fr] gap-5">
        <section>Buttons</section>
        <ProgressBarSection
          subTitle="Objectifs"
          title="Semestre 2 - 65 000€"
          percentage={faker.number.int(100)}
          deadline={endOfYear(new Date())}
        />
      </div>

      <section className="col-span-2">Revenus et dépenses</section>
      <section className="col-span-2">Fichiers</section>
    </div>

    <div className="flex flex-col gap-5 max-h-content">
      <CreditCard />
      <ExpensesSection />
    </div>
  </main>
);

export default Administrative;
