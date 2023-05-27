import { useState } from "react";
import { format } from "date-fns";
import { faker } from "@faker-js/faker";
import { motion } from "framer-motion";
import generateCreditCard from "../utils/faker/credit-card";
import { formatCurrency, formatCreditCardNumber } from "../utils/format";
import VisaLogo from "./svg/VisaLogo";

const creditCard = generateCreditCard();

const CreditCard = () => {
  const [numberHidden, numberCcvHidden] = useState(true);
  const [ccvHidden, setCcvHidden] = useState(true);

  return (
    <section className="p-7 flex flex-col gap-5 justify-between border-[1px] border-black dark:border-white">
      <div>
        <p className="opacity-50">Solde disponible</p>
        <p className="text-4xl font-bold">
          {formatCurrency(faker.number.float({ min: 10000, max: 100000 }))}
        </p>
      </div>

      {/* Bottom */}
      <div className="flex justify-between items-end gap-2.5">
        {/* Card infos */}
        <div className="space-y-1">
          <p>{creditCard.name}</p>
          <div className="space-y-1">
            <motion.button
              key={numberHidden ? "number-hidden" : "number-revealed"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="whitespace-nowrap grid grid-cols-4 gap-1"
              onClick={() => numberCcvHidden((prev) => !prev)}
            >
              {formatCreditCardNumber(creditCard.number, numberHidden).map(
                (part) => (
                  <span key={part}>{part}</span>
                )
              )}
            </motion.button>
            <div className="flex justify-between gap-5">
              <p>{format(creditCard.expirationDate, "dd/MM")}</p>
              <motion.button
                onClick={() => setCcvHidden((prev) => !prev)}
                key={ccvHidden ? "ccv-hidden" : "ccv-revealed"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="whitespace-nowrap"
              >
                {ccvHidden ? "•••" : creditCard.ccv}
              </motion.button>
            </div>
          </div>
        </div>
        {/* LOGO */}
        {<VisaLogo />}
      </div>
    </section>
  );
};

export default CreditCard;
