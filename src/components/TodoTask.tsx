import cn from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import BinIcon from "./svg/BinIcon";
import EditIcon from "./svg/EditIcon";
import { Task } from "../utils/types";

type Props = { task: Task; index: number };

const TodoTask = ({ task, index }: Props) => (
  <AnimatePresence>
    <motion.div
      key={task.title}
      className="py-5 flex gap-2.5 border-bottom items-center relative group"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.07 * index }}
    >
      <input
        disabled
        type="checkbox"
        defaultChecked={task.isDone}
        className={cn(
          "appearance-none h-5 aspect-square border-[1px] rounded-full border-black dark:border-light relative",
          "checked:bg-current-theme checked:border-0",
          "checked:after:content-[url(icons/checked-black.svg)] dark:checked:after:content-[url(icons/checked-black.svg)]",
          "checked:after:absolute checked:after:left-1/2 checked:after:-translate-x-1/2"
        )}
      />
      <div className="space-y-1">
        <p className="font-bold">{task.title}</p>
        {task.description && <p className="text-xs">{task.description}</p>}
      </div>

      <div className="flex opacity-0 transition-opacity absolute bg-secondary gap-2.5 p-2.5 right-0 top-2.5 group-hover:opacity-100">
        <button disabled>
          <BinIcon />
        </button>
        <button disabled>
          <EditIcon />
        </button>
      </div>
    </motion.div>
  </AnimatePresence>
);

export default TodoTask;
