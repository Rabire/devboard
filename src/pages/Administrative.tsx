const Administrative = () => (
  <main className="grid-cols-[6fr_3fr] gap-5">
    <div className="grid grid-rows-[2fr_1fr_2fr_1fr] grid-cols-2 gap-5">
      <section>Revenus par clients</section>
      <section>Chiffre d’affaire</section>

      <div className="col-span-2 grid grid-cols-[2fr_4fr] gap-5">
        <section>Buttons</section>
        <section>Preogress Bar</section>
      </div>

      <section className="col-span-2">Revenus et dépenses</section>
      <section className="col-span-2">Fichiers</section>
    </div>

    <div className="flex flex-col  gap-5">
      <section>CB-Solde</section>
      <section className="flex-1">Dépenses</section>
    </div>
  </main>
);

export default Administrative;
