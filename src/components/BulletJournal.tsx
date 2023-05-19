import { useStore } from "@nanostores/react";
import { eachHourOfInterval, format, set } from "date-fns";
import {
  selectedDay as selectedDayStore,
  selectedDayActivities,
} from "../stores/productivity";
import NotificationIcon from "./svg/NotificationIcon";
import ActivityCard from "./ActivityCard";

const BulletJournal = () => {
  const selectedDay = useStore(selectedDayStore);

  const hours = eachHourOfInterval({
    start: set(selectedDay, { hours: 6 }),
    end: set(selectedDay, { hours: 19 }),
  });

  const activities = useStore(selectedDayActivities);

  return (
    <section className="lg:overflow-y-auto bg-secondary rounded-2xl">
      {/* Header */}
      <div className="flex justify-between sticky top-0 bg-secondary p-5 z-20 mb-2.5">
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
            <div className="border-t-2 border-light dark:border-dark w-full h-11 relative">
              <ActivityCard activities={activities} hour={hour} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BulletJournal;
