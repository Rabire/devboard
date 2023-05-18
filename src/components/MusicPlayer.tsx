import PauseIcon from "./svg/PauseIcon";
import SkipMusicIcon from "./svg/SkipMusicIcon";

const MusicPlayer = () => (
  <section className="card flex gap-5 items-center">
    <button className="album">
      <PauseIcon />
    </button>

    <div className="flex flex-col justify-between h-full">
      <div className="flex justify-between">
        {/* Title & Singer box */}
        <div>
          <p className="font-bold">Instant Crush</p>
          <p className="mb-auto">Daft Punk</p>
        </div>

        {/* Skip songs  */}
        <div className="flex gap-5 items-center">
          <button>
            <SkipMusicIcon />
          </button>
          <button className="rotate-180">
            <SkipMusicIcon />
          </button>
        </div>
      </div>

      {/* Time */}
      <div className="flex gap-2.5 items-center">
        <p>1:22</p>
        <input
          type="range"
          min={0}
          defaultValue={82}
          max={220}
          className="w-full appearance-none bg-current-theme h-1 rounded-full"
        />
        <p>3:40</p>
      </div>
    </div>
  </section>
);

export default MusicPlayer;
