import styles from './main.module.scss'

export function CurrentSong() {
  return <div className={styles.song}>
    <div className={styles.image}>
      <img
        src="https://www.google.com/favicon.ico"
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