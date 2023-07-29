import clsx from 'clsx'
import styles from './main.module.scss'

// Hooks
import { useState } from 'react'

// Components
import { PauseIcon, PlayIcon } from '@/shared/icons'

export function Track() {
  const [active, setActive] = useState(false)
  
  function toggle() {
    setActive(pre => !pre)
  }

  return <div className={clsx(styles.track, {
    [styles.active]: active
  })}>
    <div onClick={toggle} className={styles.status}>
      <div className={styles.index}>1</div>
      <PlayIcon
        className={clsx(styles.icon, styles.play)}
        fill="white"
        stroke="none"
      />
      <PauseIcon
        className={clsx(styles.icon, styles.pause)}
        stroke="white"
        strokeWidth={2}
      />
    </div>
    <img
      className={styles.image}
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjjNFOPsz_JSGT3Bq0wlUIEwybFHmaBMOeQg&usqp=CAU"
      alt="Track Image"
    />
    <div className={styles.data}>
      <span className={styles.trackName}>Социум</span>
      <div className={styles.more}>
        <span className={styles.author}>БРЕДИШЬ</span>
      </div>
    </div>
    <span className={styles.album} data-text-center>
      Хочешь кричать?
    </span>
    <span className={styles.addedAt} data-text-center>
      15 часов назад
    </span>
  </div>
}