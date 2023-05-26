import cn from "classnames";
import BulletJournal from "../components/BulletJournal";
import Calendar from "../components/Calendar";
import MusicPlayer from "../components/MusicPlayer";
import ProductivityCharts from "../components/ProductivityCharts";
import TodoList from "../components/TodoList";

const Productivity = () => (
  <main>
    {/* Left */}
    <TodoList />

    {/* tablet:right desktop:middle */}
    <div className="grid grid-rows-[1fr_4fr] gap-5 tablet:max-h-content">
      <MusicPlayer />
      <ProductivityCharts />
    </div>

    {/* tablet:full-width desktop:right */}
    <div
      className={cn(
        "flex flex-col gap-5 max-h-content",
        "tablet:col-span-2 tablet:grid tablet:grid-cols-2 tablet:max-h-[300px]",
        "desktop:col-span-1 desktop:flex desktop:max-h-none"
      )}
    >
      <Calendar />
      <BulletJournal />
    </div>
  </main>
);

export default Productivity;
