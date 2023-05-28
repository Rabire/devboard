import { useState } from "react";
import { doneTasks, todoTasks } from "../stores/productivity";
import FilterButton from "./FilterButton";
import AddIcon from "./svg/AddIcon";
import TodoTask from "./TodoTask";

const TodoList = () => {
  const [filter, setFilter] = useState<"todo" | "done" | "all">("all");

  const todo = todoTasks.get();
  const done = doneTasks.get();

  return (
    <section className="tablet:overflow-y-scroll bg-secondary p-0 tablet:h-main">
      {/* Header */}
      <div className="section-header">
        <h2>Mes tâches</h2>

        <FilterButton
          buttons={[
            {
              label: "À faire",
              onClick: () => setFilter("todo"),
              isActive: filter === "todo",
            },
            {
              label: "Terminées",
              onClick: () => setFilter("done"),
              isActive: filter === "done",
            },
            {
              label: "Toutes",
              onClick: () => setFilter("all"),
              isActive: filter === "all",
            },
          ]}
        />
      </div>

      {/* Tasks */}
      <div className="mx-5">
        <button
          disabled
          aria-label="add-task"
          className="flex gap-2.5 items-center"
        >
          <div className="bg-black dark:bg-white text-white h-[20px] min-w-[20px] flex items-center justify-center rounded-full">
            <AddIcon />
          </div>
          Nouvelle tâche
        </button>

        {filter !== "done" &&
          todo.map((task, i) => (
            <TodoTask key={task.title} task={task} index={i} />
          ))}

        {filter !== "todo" &&
          done.map((task, i) => (
            <TodoTask key={task.title} task={task} index={i} />
          ))}
      </div>
    </section>
  );
};

export default TodoList;
