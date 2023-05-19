import { eachHourOfInterval, format, set, startOfToday } from "date-fns";
import NotificationIcon from "./svg/NotificationIcon";

const selectedDay = startOfToday(); // TODO: should get it in context

const BulletJournal = () => {
  const hours = eachHourOfInterval({
    start: set(selectedDay, { hours: 6 }),
    end: set(selectedDay, { hours: 21 }),
  });

  return (
    <section className="lg:overflow-y-auto bg-secondary rounded-2xl">
      {/* Header */}
      <div className="flex justify-between sticky top-0 bg-secondary p-5 z-10 mb-2.5">
        <h2 className="txt-title">Bullet journal</h2>
        <button>
          <NotificationIcon />
        </button>
      </div>

      {/* Schedules */}
      <div className="mx-5">
        {hours.map((hour) => (
          <div key={hour.toString()} className="flex gap-5">
            <div className="-translate-y-2.5">{format(hour, "HH:mm")}</div>
            <button className="border-t-2 border-light dark:border-dark cursor-pointer w-full h-11 py-0.5 pl-2">
              <div className="bg-current-theme h-full text-black text-start p-1 flex gap-5 justify-between items-center">
                Ranger chambre
                <div className="text-xs bg-dark text-white py-0.5 px-5 rounded-full whitespace-nowrap self-start">
                  Concours #7
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BulletJournal;
