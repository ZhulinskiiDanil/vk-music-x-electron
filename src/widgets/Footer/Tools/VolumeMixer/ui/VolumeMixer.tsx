import styles from './main.module.scss'

// Components
import { VolumeIcon } from '@/shared/icons'
import { ProgressBar } from '@/entities/ProgressBar/ui/ProgressBar'

// Redux
import { useSelector } from 'react-redux'
import { RootState } from '@/app/redux'
import { useDispatch } from 'react-redux'
import { settingsActions } from '@/app/redux'

export function VolumeMixer() {
  const dispatch = useDispatch()
  const volume = useSelector((state: RootState) => state.settings.volume)
  const muted = volume <= 0

  function onValue(val: number) {
    dispatch(settingsActions.setVolume({ volume: val }))
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