import { useState } from "react";
import { doneTasks, todoTasks } from "../stores/productivity";
import FilterButton from "./FilterButton";
import AddIcon from "./svg/AddIcon";
import TodoTask from "./TodoTask";

const TodoList = () => {
  const [filter, setFilter] = useState<"todo" | "done" | "all">("all");

  return (
    <section className="tablet:overflow-y-scroll bg-secondary p-0 tablet:max-h-content">
      {/* Header */}
      <div className="flex justify-between items-end sticky top-0 right-0 left-0 bg-secondary p-5 z-10 gap-5">
        <div className="txt-title flex gap-2.5 items-center">
          <h2>Mes tâches</h2>
          <button className="bg-black dark:bg-white text-white h-[20px] min-w-[20px] flex items-center justify-center rounded-full">
            <AddIcon />
          </button>
        </div>

        <FilterButton
          buttons={[
            {
              label: "Todo",
              onClick: () => setFilter("todo"),
              isActive: filter === "todo",
            },
            {
              label: "Done",
              onClick: () => setFilter("done"),
              isActive: filter === "done",
            },
            {
              label: "All",
              onClick: () => setFilter("all"),
              isActive: filter === "all",
            },
          ]}
        />
      </div>

      {/* Tasks */}
      <div className="mx-5">
        {filter !== "done" &&
          todoTasks
            .get()
            .map((task) => <TodoTask key={task.title} task={task} />)}
        {filter !== "todo" &&
          doneTasks
            .get()
            .map((task) => <TodoTask key={task.title} task={task} />)}
      </div>
    </section>
  );
};

export default TodoList;
