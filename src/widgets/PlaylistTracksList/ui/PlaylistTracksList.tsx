import clsx from 'clsx'
import styles from './main.module.scss'

// Hooks
import { useState } from 'react'

// Components
import { Track } from '@/entities/Track/ui/Track'
import { PauseIcon, PlayIcon } from '@/shared/icons'

export function PlaylistTracksList() {
  const [active, setActive] = useState(false)

  const toggle = () => setActive(pre => !pre)

  return <div className={styles.container}>
    <div className={styles.tools}>
      <div onClick={toggle} className={clsx(styles.status, {
        [styles.active]: active
      })}>
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
    </div>
    <hr className={styles.hr} />
    <div className={styles.list}>
      <Track />
      <Track />
      <Track />
      <Track />
      <Track />
      <Track />
      <Track />
      <Track />
      <Track />
      <Track />
      <Track />
      <Track />
      <Track />
      <Track />
      <Track />
      <Track />
      <Track />
      <Track />
      <Track />
      <Track />
      <Track />
    </div>
  </div>
}