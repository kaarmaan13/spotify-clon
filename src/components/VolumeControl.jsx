import { useRef } from "react";
import { usePlayerStore } from "@/store/playerStore";
import { Slider } from '@/components/Slider';
import { VolumeSilence, Volume } from "@/components/Volumes";

export const VolumeControl = () => {

  const volume = usePlayerStore(state => state.volume);
  const setVolume = usePlayerStore(state => state.setVolume);
  const previousVolumeRef = useRef(volume);

  const isVolumeSilenced = volume < 0.1;

  const handleClickVolume = () => {
    if (isVolumeSilenced) {
      setVolume(previousVolumeRef.current);
    } else {
      previousVolumeRef.current = volume;
      setVolume(0);
    }
  };

  return (
    <div className="flex flex-1 justify-end items-center gap-x-3 p-3 text-white">
      <button className="opacity-70 hover:opacity-100" onClick={handleClickVolume}>
        {isVolumeSilenced ? <VolumeSilence /> : <Volume />}
      </button>
      <Slider
        className="w-[95px]"
        defaultValue={[100]}
        max={100}
        min={0}
        value={[volume * 100]}
        onValueChange={(value) => {
          const [newVolume] = value;
          const volumeValue = newVolume / 100;
          setVolume(volumeValue);
        }} />
    </div>
  );
};
