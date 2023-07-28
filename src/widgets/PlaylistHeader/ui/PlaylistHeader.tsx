import styles from './main.module.scss'
import clsx from 'clsx'

// Hooks
import { useUser } from '@/entities/User/model/useUser'

// Components
import { SavedFolderIcon } from '@/shared/icons'
import { usePlaylist } from '../model/usePlaylist'

export function PlaylistHeader() {
  const { user } = useUser()
  const { playlist, ref } = usePlaylist({
    saved: {
      title: "Сохраненые",
      Icon: SavedFolderIcon,
      count: 156
    },
    google_tracks: {
      title: "Google Tracks",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjjNFOPsz_JSGT3Bq0wlUIEwybFHmaBMOeQg&usqp=CAU",
      count: 13
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
      <div className={styles.footer}>
        <span className={styles.username}>
          { user.username }
        </span>
        <Circle />
        <span className={styles.tracksCount}>
          { playlist.count } Треков
        </span>
      </div>
    </div>
  </header>
}

const Circle = () => <div className={styles.circle} />