import cn from "classnames";
import BinIcon from "./svg/BinIcon";
import EditIcon from "./svg/EditIcon";
import { Task } from "../utils/types";

type Props = { task: Task };

const TodoTask = ({ task }: Props) => (
  <div className="py-5 flex gap-2.5 border-bottom items-center relative group">
    <input
      type="checkbox"
      checked={task.isDone}
      className={cn(
        "appearance-none h-5 aspect-square border-[1px] rounded-full border-black dark:border-light relative",
        "checked:bg-current-theme checked:border-0",
        "checked:after:content-[url(icons/checked-black.svg)] dark:checked:after:content-[url(icons/checked-black.svg)] checked:after:absolute checked:after:left-1/2 checked:after:-translate-x-1/2"
      )}
    />
    <div className="space-y-2.5">
      <p className="font-bold">{task.title}</p>
      {task.description && <p>{task.description}</p>}
    </div>

    <div className="hidden absolute bg-secondary gap-2.5 p-2.5 right-0 top-2.5 group-hover:flex">
      <button>
        <BinIcon />
      </button>
      <button>
        <EditIcon />
      </button>
    </div>
  </div>
);

export default TodoTask;
