import styles from './main.module.scss'

// Components
import { VolumeIcon } from '@/shared/icons'
import { ProgressBar } from '@/entities/ProgressBar/ui/ProgressBar'

// Redux
import { useSelector } from 'react-redux'
import { RootState } from '@/app/redux'
import { useDispatch } from 'react-redux'
import { settingsActions } from '@/app/redux'
import { useCallback, useState } from 'react'

export function VolumeMixer() {
  const dispatch = useDispatch()
  const [lastValue, setLastValue] = useState(0)
  const volume = useSelector((state: RootState) => state.settings.volume)
  const muted = volume <= 0
  
  const onValue = useCallback((val: number) => {
    dispatch(settingsActions.setVolume({ volume: val }))
  }, [])

  function toggle() {
    dispatch(settingsActions.setVolume({
      volume: volume > 0 ? 0 : lastValue
    }))

    setLastValue(pre => volume > 0 ? volume : pre)
  }

  return <div className={styles.volumeMixer}>
    <div onClick={toggle} className={styles.icon}>
      <VolumeIcon
        stroke="white"
        muted={muted}
      />
    </div>
    <ProgressBar
      onValue={onValue}
      progress={volume}
      zero={volume === 0}
      className={styles.progress}
    />
  </div>
}