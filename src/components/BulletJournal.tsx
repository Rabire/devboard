import { useState } from "react";
import { useStore } from "@nanostores/react";
import cn from "classnames";
import { eachHourOfInterval, format, set } from "date-fns";
import { $selectedDay, selectedDayActivities } from "../stores/productivity";
import NotificationIcon from "./svg/NotificationIcon";
import ActivityCard from "./ActivityCard";

const BulletJournal = () => {
  const selectedDay = useStore($selectedDay);
  const activities = useStore(selectedDayActivities);
  const [isMuted, setIsMuted] = useState(false);

  const hours = eachHourOfInterval({
    start: set(selectedDay, { hours: 6 }),
    end: set(selectedDay, { hours: 19 }),
  });

  return (
    <section className="tablet:overflow-y-scroll flex-1 bg-secondary rounded-2xl p-0">
      {/* Header */}
      <div className="section-header mb-2.5">
        <h2>Planning</h2>
        <button
          className={cn(
            "hover:bg-white/20 aspect-square p-2 rounded-full",
            isMuted && "opacity-50"
          )}
          onClick={() => setIsMuted((prev) => !prev)}
        >
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
