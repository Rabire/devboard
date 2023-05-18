import cn from "classnames";

const TodoTask = () => (
  <div className="py-5 flex gap-2.5 border-bottom items-center">
    <input
      type="checkbox"
      className={cn(
        "appearance-none h-5 aspect-square border-[1px] rounded-full border-black dark:border-light relative",
        "checked:bg-current-theme checked:border-0",
        "checked:after:content-[url(icons/checked-black.svg)] dark:checked:after:content-[url(icons/checked-black.svg)] checked:after:absolute checked:after:left-1/2 checked:after:-translate-x-1/2"
      )}
    />
    <div className="space-y-2.5">
      <p className="font-bold">TodoTask</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim saepe
        magnam sed ea? Unde dolorem expedita facilis veniam adipisci cumque.
      </p>
    </div>
  </div>
);

export default TodoTask;
