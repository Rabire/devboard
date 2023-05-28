const Loader = () => (
  <main className="desktop:grid-rows-4">
    <div className="bg-secondary rounded-2xl animate-pulse desktop:row-span-3" />
    <div className="bg-secondary rounded-2xl animate-pulse tablet:row-span-2 desktop:row-span-1 desktop:col-span-2" />
    <div className="bg-secondary rounded-2xl animate-pulse desktop:row-span-2" />
    <div className="bg-secondary rounded-2xl animate-pulse tablet:col-span-2 desktop:col-span-1 desktop:row-span-2" />
    <div className="bg-secondary rounded-2xl animate-pulse hidden desktop:block desktop:col-span-2" />
    <div className="bg-secondary rounded-2xl animate-pulse hidden desktop:block" />
  </main>
);

export default Loader;
