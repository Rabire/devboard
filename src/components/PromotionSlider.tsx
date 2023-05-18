import classNames from "classnames";

type CardProps = { bold: string; text: string; secondary?: boolean };

const Card = ({ bold, text, secondary }: CardProps) => (
  <div
    className={classNames(
      "rounded-xl shadow-lg p-2.5 flex flex-col justify-center h-full aspect-square",
      secondary && "bg-current-theme flex-col-reverse whitespace-nowrap",
      secondary ? "bg-current-theme text-black" : "bg"
    )}
  >
    <p className="txt-title">{bold}</p>
    <p>{text}</p>
  </div>
);

const PromotionSlider = () => (
  <section className="card col-span-2 flex gap-5 items-center overflow-x-scroll">
    <div className="w-min">
      <p className="txt-title whitespace-nowrap mb-2.5">DevBoard +</p>
      <p>Franchissez le pas de la productivité</p>
    </div>

    <Card bold="+10" text="Nouveaux graphiques" />
    <Card bold="New" text="Statistiques LinkedIn" />
    <Card bold="Free" text="Aucune limite" />
    <Card bold="+99" text="Widgets personalisabbles" />
    <Card secondary={true} bold="15 jours offert !" text="Devenez DB+" />
  </section>
);

export default PromotionSlider;
