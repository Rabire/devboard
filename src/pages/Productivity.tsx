import Calendar from "../components/Calendar";
import MusicPlayer from "../components/MusicPlayer";
import PromotionSlider from "../components/PromotionSlider";
import TodoList from "../components/TodoList";

const Productivity = () => (
  <main className="grid-cols-3 grid-rows-[5fr_1fr]">
    {/* Left */}
    <TodoList />

    {/* Middle */}
    <div className="grid grid-rows-[1fr_4fr] gap-5">
      <MusicPlayer />

      <div className="space-y-5">
        <div className="card">Temps par projet</div>
        <div className="card">Tâches términées</div>
      </div>
    </div>

    {/* Right */}
    <div className="row-span-2 grid gap-5 grid-rows-[auto_1fr]">
      <Calendar />
      <div className="card">Bullet journal</div>
    </div>

    <PromotionSlider />
  </main>
);

export default Productivity;
