import { useState } from "react";
import { format } from "date-fns";
import generateCreditCard from "../utils/faker/credit-card";
import { formatCurrency, formatCreditCardNumber } from "../utils/format";
import VisaLogo from "./svg/VisaLogo";

const creditCard = generateCreditCard();

const CreditCard = () => {
  const [numberHidden, numberCcvHidden] = useState(true);
  const [ccvHidden, setCcvHidden] = useState(true);

  return (
    <section className="p-7 aspect-video flex flex-col gap-5 justify-between border-[1px] border-black dark:border-white">
      <div>
        <p className="opacity-50">Solde disponible</p>
        <p className="text-4xl font-bold">{formatCurrency(9999)}</p>
      </div>

      {/* Bottom */}
      <div className="flex justify-between items-end gap-2.5">
        {/* Card infos */}
        <div className="space-y-1">
          <p>{creditCard.name}</p>
          <div className="w-min space-y-1">
            <button
              className="whitespace-nowrap"
              onClick={() => numberCcvHidden((prev) => !prev)}
            >
              {formatCreditCardNumber(creditCard.number, numberHidden)}
            </button>
            <div className="flex justify-between gap-5">
              <p>{format(creditCard.expirationDate, "dd/MM")}</p>
              <button onClick={() => setCcvHidden((prev) => !prev)}>
                {ccvHidden ? "•••" : creditCard.ccv}
              </button>
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