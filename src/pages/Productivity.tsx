const Productivity = () => (
  <main className="flex flex-col md:grid grid-cols-3 grid-rows-[5fr_1fr] gap-5">
    {/* Left */}
    <div className="card">Todolist</div>

    {/* Middle */}
    <div className="grid grid-rows-4 gap-5">
      <div className="card">Music</div>

      <div className="row-span-4 grid gap-5">
        <div className="card">Temps par projet</div>
        <div className="card">Tâches términées</div>
      </div>
    </div>

    {/* Right */}
    <div className="row-span-2 grid gap-5 grid-rows-[auto_1fr]">
      <div className="card">
        <p>Calendar</p>
      </div>
      <div className="card">Bullet journal</div>
    </div>

    <div className="card col-span-2">slider</div>
  </main>
);

export default Productivity;
