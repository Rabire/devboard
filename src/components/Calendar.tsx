import { useState } from "react";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  isSameDay,
  startOfToday,
  startOfMonth,
} from "date-fns";
import cn from "classnames";
import { useStore } from "@nanostores/react";
import Swiper from "./Swiper";
import {
  selectedDay as selectedDayStore,
  setSelectedDay,
} from "../stores/productivity";
import WEEK_DAYS from "../static/calendar";

const today = startOfToday();

const Calendar = () => {
  const [month, setMonth] = useState(today);
  const selectedDay = useStore(selectedDayStore);

  const days = eachDayOfInterval({
    start: startOfMonth(month),
    end: endOfMonth(month),
  });

  const emptyDays = parseInt(format(days[0], "i"), 10) - 1;

  return (
    <section className="card">
      {/* Header */}
      <div className="flex justify-between mb-5">
        <h3 className="font-bold">{format(month, "MMMM yyyy")}</h3>
        <Swiper
          previous={() => setMonth(add(month, { months: -1 }))}
          next={() => setMonth(add(month, { months: 1 }))}
        />
      </div>

      {/* Calendar */}
      <div className="grid grid-cols-7">
        {WEEK_DAYS.map((day) => (
          <div className="opacity-50 text-center uppercase" key={day}>
            {day}
          </div>
        ))}
        {new Array(emptyDays).fill("").map((_, index) => (
          <div key={index}></div>
        ))}
        {days.map((day) => (
          <button
            onClick={() => setSelectedDay(day)}
            className={cn(
              "py-2.5 rounded-full",
              isSameDay(day, selectedDay) && "bg-current-theme text-black"
            )}
            key={day.toString()}
          >
            {format(day, "d")}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Calendar;
