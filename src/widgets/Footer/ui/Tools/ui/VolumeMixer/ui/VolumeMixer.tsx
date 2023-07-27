import styles from './main.module.scss'

// Components
import { VolumeIcon } from '@/shared/icons'
import { ProgressBar } from '@/entities/ProgressBar/ui/ProgressBar'
import { useState } from 'react'

export function VolumeMixer() {
  const [volume, setVolume] = useState(75)
  const muted = volume <= 0

  function onValue(val: number) {
    setVolume(val)
  }

  return <div className={styles.volumeMixer}>
    <div className={styles.icon}>
      <VolumeIcon
        stroke="white"
        muted={muted}
      />
    </div>
    <ProgressBar
      onValue={onValue}
      progress={volume}
      className={styles.progress}
    />
  </div>
}