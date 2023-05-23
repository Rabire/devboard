const Technical = () => (
  <main className="grid-cols-3">
    {/* Left */}
    <div className="space-y-5">
      <section>
        <h1>Project Picker</h1>
      </section>
      <section>
        <h2>Milestone</h2>
      </section>
      <section>
        <h2>Issues statistiques</h2>
      </section>
      <section>
        <h2>Teams</h2>
        <h2>Travail sur</h2>
      </section>
    </div>

    {/* Middle */}
    <div className="space-y-5">
      <section>
        <h2>Notes rapides</h2>
      </section>
      <section>
        <h2>Codebase actuelle</h2>
      </section>
    </div>

    {/* Right */}
    <div className="space-y-5">
      <section>
        <h2>Mes pull-requests</h2>
      </section>
      <section>
        <h2>Notifications</h2>
      </section>
    </div>
  </main>
);

export default Technical;
