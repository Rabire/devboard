import AddIcon from "./Svg/AddIcon";
import TodoTask from "./TodoTask";

const TodoList = () => (
  <div className="card overflow-y-scroll ">
    {/* Header */}
    <div className="flex justify-between items-end sticky top-0 bg-dark-secondary">
      <div className="txt-title flex gap-2.5 items-center">
        <h2>Mes tâches</h2>
        <button className="bg-black dark:bg-white text-white h-5 w-5 flex items-center justify-center rounded-full">
          <AddIcon />
        </button>
      </div>

      <div className="text-xs">
        <button className="px-1">Todo</button>
        <button className="px-1">Done</button>
        <button className="px-1 txt-active">All</button>
      </div>
    </div>

    {/* Tasks */}
    <TodoTask />
    <TodoTask />
    <TodoTask />
    <TodoTask />
    <TodoTask />
    <TodoTask />
    <TodoTask />
  </div>
);

export default TodoList;
