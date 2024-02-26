import { Play } from "@/icons/Play"
import { Pause } from "@/icons/Pause"
import { usePlayerStore } from "@/store/playerStore"

export function CardPlayButton({ id, size = 'small' }) {

  const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } = usePlayerStore(state => state)

  const isPlayingPlaylist = isPlaying && currentMusic?.playlist?.id === id

  const handleClick = () => {

    if(isPlayingPlaylist) {
      setIsPlaying(false)
      return
    }

    fetch(`/api/get-info-playlist.json?id=${id}`)
      .then(res => res.json())
      .then(data => {
        const { songs, playlist } = data
        setIsPlaying(true)
        setCurrentMusic({ songs, playlist, song: songs[0] })
      })
  }

  const iconClassName = size === 'small' ? 'size-4' : 'size-6'

  return (
    <button className="bg-green-500 p-3 rounded-full hover:scale-105 transition hover:bg-green-400" onClick={handleClick}>
      {isPlayingPlaylist ? <Pause className={iconClassName} /> : <Play className={iconClassName} />}
    </button>
  )
}