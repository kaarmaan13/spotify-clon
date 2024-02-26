import { useEffect, useState } from "react";
import { Slider } from "@/components/Slider";

export const SongControl = ({ audio }) => {
  const [currentTime, setCurrenTime] = useState(0);

  const duration = audio?.current?.duration ?? 0;

  useEffect(() => {
    audio.current.addEventListener('timeupdate', handleTimeUpdate);
    return () => {
      audio.current.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const handleTimeUpdate = () => {
    setCurrenTime(audio.current.currentTime);
  };

  const formatTime = time => {
    if (time == null) return '-:--';

    const seconds = Math.floor(time % 60);
    const minutes = Math.floor(time / 60);

    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex items-center gap-x-3">
      <span className="text-xs opacity-50 tabular-nums w-12 text-right">{currentTime ? formatTime(currentTime) : '--:--'}</span>
      <Slider
        className="w-[650px]"
        defaultValue={[0]}
        value={[currentTime]}
        min={0}
        max={audio?.current?.duration ?? 0}
        onValueChange={(value) => {
          const [newValue] = value;
          audio.current.currentTime = newValue;
        }} />
      <span className="text-xs opacity-50 tabular-nums w-12">{duration ? formatTime(duration) : '--:--'}</span>
    </div>
  );
};
