import styles from './main.module.scss'
import clsx from 'clsx'

// Components
import { SavedFolderIcon } from '@/shared/icons'
import { usePlaylist } from '../model/usePlaylist'

export function PlaylistHeader() {
  const { playlist, ref } = usePlaylist({
    saved: {
      title: "Сохраненые",
      Icon: SavedFolderIcon
    },
    google_tracks: {
      title: "Google Tracks",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjjNFOPsz_JSGT3Bq0wlUIEwybFHmaBMOeQg&usqp=CAU"
    }
  })

  const image = playlist?.Icon ? (
    <playlist.Icon
      stroke='white'
      className={clsx(styles.image, styles.icon)}
    />
  ) : playlist?.imageUrl ? (
    <img
      className={styles.image}
      src={playlist?.imageUrl}
      alt="Playlist Image"
    />
  ) : undefined

  return <header ref={ref} className={styles.header}>
    { image }
    <div className={styles.data}>
      <div className={styles.type}>
        Открытый плейлист
      </div>
      <div className={styles.title}>
        { playlist.title }
      </div>
      <div className={styles.description}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, repellendus.
      </div>
      <div className={styles.user}>
        <span className={styles.username}>Даня</span>
      </div>
    </div>
  </header>
}