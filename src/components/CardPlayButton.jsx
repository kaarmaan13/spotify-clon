import { Pause, Play } from "@/components/Player"
import { usePlayerStore } from "@/store/playerStore"

export function CardPlayButton({ id }) {

  const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } = usePlayerStore(state => state)

  const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id

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

        console.log({ songs, playlist });
      })
  }


  return (
    <button className="bg-green-500 p-3 rounded-full" onClick={handleClick}>

      {isPlayingPlaylist ? <Pause /> : <Play />}
    </button>
  )
}