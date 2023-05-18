import PauseIcon from "./svg/PauseIcon";
import SkipMusicIcon from "./svg/SkipMusicIcon";

const MusicPlayer = () => (
  <div className="card flex gap-5 items-center">
    <img
      className="object-cover h-full max-h-32 aspect-square rounded-lg border-2 border-white"
      src="pictures/daft-punk-album.jpg"
    />

    <div className="flex flex-col justify-between h-full">
      <p className="font-bold">Instant Crush</p>
      <p className="mb-auto">Daft Punk</p>

      <div className="flex gap-5 items-center justify-center mb-1">
        <button>
          <SkipMusicIcon />
        </button>
        <button className="w-8 aspect-square bg-black dark:bg-white rounded-full flex items-center justify-center">
          <PauseIcon />
        </button>
        <button className="rotate-180">
          <SkipMusicIcon />
        </button>
      </div>

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
  </div>
);

export default MusicPlayer;
