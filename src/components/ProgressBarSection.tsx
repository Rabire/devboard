import { formatRelative, isPast } from "date-fns";
import { fr } from "date-fns/locale";

type Props = {
  title: string;
  subTitle: string;
  percentage: number;
  deadline: Date;
};

const ProgressBarSection = ({
  title,
  subTitle,
  percentage,
  deadline,
}: Props) => (
  <section>
    <p className="opacity-50 mb-1">{subTitle}</p>
    <h2 className="mb-4">{title}</h2>
    <div>
      <div className="h-2 w-full bg rounded-full overflow-hidden relative">
        <span
          className="bg-current-theme inset-0 absolute"
          style={{ transform: `translateX(-${100 - percentage}%)` }}
        />
      </div>

      <div className="mt-2.5 flex justify-between gap-5">
        <p className="opacity-50">{percentage}% terminé</p>
        <p
          className={
            isPast(deadline) ? "text-github-reject opacity-100" : "opacity-50"
          }
        >
          Deadline: {formatRelative(deadline, new Date(), { locale: fr })}
        </p>
      </div>
    </div>
  </section>
);

export default ProgressBarSection;
