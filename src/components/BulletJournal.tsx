import { useStore } from "@nanostores/react";
import { eachHourOfInterval, format, set } from "date-fns";
import { $selectedDay, selectedDayActivities } from "../stores/productivity";
import NotificationIcon from "./svg/NotificationIcon";
import ActivityCard from "./ActivityCard";

const BulletJournal = () => {
  const selectedDay = useStore($selectedDay);
  const activities = useStore(selectedDayActivities);

  const hours = eachHourOfInterval({
    start: set(selectedDay, { hours: 6 }),
    end: set(selectedDay, { hours: 19 }),
  });

  return (
    <section className="tablet:overflow-y-scroll flex-1 bg-secondary rounded-2xl p-0">
      {/* Header */}
      <div className="section-header mb-2.5">
        <h2>Bullet journal</h2>
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
