import { differenceInHours, isEqual, isPast } from "date-fns";
import cn from "classnames";
import { Activity } from "../utils/types";

type Props = { activities: Activity[]; hour: Date };

const ActivityCard = ({ activities, hour }: Props) => {
  const activity = activities.find((act) => isEqual(act.start, hour));

  if (!activity) return null;

  const duration = differenceInHours(activity?.end, activity?.start);

  return (
    <div
      className={cn(
        "bg-current-theme text-black text-start p-1 flex gap-5 justify-between z-10 group",
        "absolute left-2 right-0",
        isPast(activity.end) && "grayscale-75"
      )}
      style={{ height: `${duration}00%` }}
    >
      <p className="truncate group-hover:overflow-visible group-hover:text-clip group-hover:whitespace-normal">
        {activity.name}
      </p>
      <div className="text-xs bg-dark text-white py-0.5 px-5 rounded-full whitespace-nowrap self-start">
        {activity.project.title}
      </div>
    </div>
  );
};

export default ActivityCard;
