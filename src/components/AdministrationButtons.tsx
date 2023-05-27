// add shine effect on promotion div

const AdministrationButtons = () => (
  <div className="grid grid-cols-2 grid-rows-2 gap-2.5">
    <button disabled className="btn">
      Devis
    </button>
    <button disabled className="btn">
      Factures
    </button>
    <button disabled className="btn">
      Mes clients
    </button>
    <button disabled className="btn">
      Opportunités
    </button>

    <div className="bg-current-theme p-5 col-span-2 border-spacing-2 rounded-lg text-black">
      <h2>Devennez DevBoard+</h2>
      <p>Franchissez le pas de la productivité !</p>
    </div>
  </div>
);

export default AdministrationButtons;
