import TodoList from "../components/TodoList";

const Productivity = () => (
  <main className="grid-cols-3 grid-rows-[5fr_1fr]">
    {/* Left */}
    <TodoList />

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
      <div className="card overflow-y-scroll">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugiat
        libero unde culpa delectus maxime impedit maiores inventore tempore
        voluptatum consequatur cum, error hic sint eius, rerum laudantium
        adipisci est. Laudantium iusto facere, dicta mollitia recusandae
        doloremque rerum quibusdam quo modi quas temporibus eaque voluptatem,
      </div>
    </div>

    <div className="card col-span-2">slider</div>
  </main>
);

export default Productivity;
