import styles from './main.module.scss'

export function CurrentSong() {
  return <div className={styles.song}>
    <div className={styles.image}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjjNFOPsz_JSGT3Bq0wlUIEwybFHmaBMOeQg&usqp=CAU"
        alt="Song Icon"
      />
    </div>
    <div className={styles.data}>
      <p className={styles.title}>
        Song name
      </p>
      <p className={styles.author}>
        Song author
      </p>
    </div>
    <div className={styles.tools}>
      TOOLS
    </div>
  </div>
}