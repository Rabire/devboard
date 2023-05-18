import Calendar from "../components/Calendar";
import MusicPlayer from "../components/MusicPlayer";
import TodoList from "../components/TodoList";

const Productivity = () => (
  <main className="grid-cols-3 grid-rows-[5fr_1fr]">
    {/* Left */}
    <TodoList />

    {/* Middle */}
    <div className="grid grid-rows-4 gap-5">
      <MusicPlayer />

      <div className="row-span-4 grid gap-5">
        <div className="card">Temps par projet</div>
        <div className="card">Tâches términées</div>
      </div>
    </div>

    {/* Right */}
    <div className="row-span-2 grid gap-5 grid-rows-[auto_1fr]">
      <Calendar />
      <div className="card">Bullet journal</div>
    </div>

    <div className="card col-span-2">slider</div>
  </main>
);

export default Productivity;
