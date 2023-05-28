import { useEffect, useState } from "react";
import PauseIcon from "./svg/PauseIcon";
import SkipMusicIcon from "./svg/SkipMusicIcon";
import MOCK_MUSICS from "../static/mock-musics";
import { formatSeconds } from "../utils/format";

const MusicPlayer = () => {
  const [currentMusicIndex, setCurrentMusicIndex] = useState(0);
  const [timeline, setTimeline] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentMusic = MOCK_MUSICS[currentMusicIndex];

  const swipeMusic = (direction: "left" | "right") => {
    const nextIndex =
      currentMusicIndex === MOCK_MUSICS.length - 1 ? 0 : currentMusicIndex + 1;
    const prevIndex =
      currentMusicIndex === 0 ? MOCK_MUSICS.length - 1 : currentMusicIndex - 1;

    setTimeline(0);
    setCurrentMusicIndex(direction === "left" ? prevIndex : nextIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isPaused) return null;
      if (timeline >= currentMusic.duration) return swipeMusic("right");
      return setTimeline((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [currentMusicIndex, timeline, isPaused]);

  return (
    <section className="flex h-[150px] gap-5 items-center justify-center">
      <button
        className="album"
        style={{ backgroundImage: `url(${currentMusic.cover})` }}
        aria-label="pause music"
        onClick={() => setIsPaused((prev) => !prev)}
      >
        <PauseIcon />
      </button>

      <div className="flex flex-col justify-between h-full">
        <div className="flex justify-between">
          {/* Title & Singer box */}
          <div>
            <a
              href={currentMusic.link}
              target="_blank"
              rel="noreferrer"
              className="font-bold hover:underline"
            >
              {currentMusic.title}
            </a>
            <p className="mb-auto">{currentMusic.artist}</p>
          </div>

          {/* Skip songs  */}
          <div className="flex gap-5 items-center">
            <button
              aria-label="previous music"
              onClick={() => swipeMusic("left")}
            >
              <SkipMusicIcon />
            </button>
            <button
              className="rotate-180"
              aria-label="next music"
              onClick={() => swipeMusic("right")}
            >
              <SkipMusicIcon />
            </button>
          </div>
        </div>

        {/* Time */}
        <div className="flex gap-2.5 items-center">
          <p>{formatSeconds(timeline)}</p>
          <input
            aria-label="music timeline"
            type="range"
            min={0}
            value={timeline}
            onChange={(e) => setTimeline(e.target.valueAsNumber)} // TODO: add debounce
            max={currentMusic.duration}
            className="w-full appearance-none bg-current-theme h-1 rounded-full"
          />
          <p>{formatSeconds(currentMusic.duration - timeline)}</p>
        </div>
      </div>
    </section>
  );
};

export default MusicPlayer;
