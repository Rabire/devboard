import AddIcon from "./Svg/AddIcon";
import TodoTask from "./TodoTask";

const TodoList = () => (
  <div className="lg:overflow-y-auto bg-secondary rounded-2xl relative">
    {/* Header */}
    <div className="flex justify-between items-end sticky top-0 bg-secondary p-5 z-10 rounded-2xl gap-5">
      <div className="txt-title flex gap-2.5 items-center">
        <h2>Mes tâches</h2>
        <button className="bg-black dark:bg-white text-white h-[20px] min-w-[20px] flex items-center justify-center rounded-full">
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
    <div className="mx-5 ">
      <TodoTask />
      <TodoTask />
      <TodoTask />
      <TodoTask />
      <TodoTask />
      <TodoTask />
      <TodoTask />
    </div>
  </div>
);

export default TodoList;
