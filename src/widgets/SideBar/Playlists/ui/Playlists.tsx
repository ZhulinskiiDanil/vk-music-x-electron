import styles from './main.module.scss'

// Components
import { SavedFolderIcon } from '@/shared/icons'
import { Playlist } from '../Playlist/ui/Playlist'

export function Playlists() {
  return <div className={styles.playlists}>
    <h3 className={styles.title}>
      Плейлисты
    </h3>
    <div className={styles.items}>
      <Playlist
        playlistId="saved"
        title="Сохраненые"
        Icon={SavedFolderIcon}
        count={150}
      />
      <Playlist
        playlistId="google_tracks"
        title="Google Tracks"
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjjNFOPsz_JSGT3Bq0wlUIEwybFHmaBMOeQg&usqp=CAU"
        subtitle='Подборка'
        count={10}
      />
    </div>
  </div>
}