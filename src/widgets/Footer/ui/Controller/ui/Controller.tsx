import styles from './main.module.scss'
import clsx from 'clsx'

// Hooks
import { PropsWithChildren, useCallback, useState } from 'react'

// Components
import {
  BackwardIcon,
  ForwardIcon,
  PauseIcon,
  PlayIcon
} from '@/shared/icons'
import { ProgressBar } from '@/entities/ProgressBar/ui/ProgressBar'

export function Controller() {
  const [paused, setPaused] = useState(false)

  function toggle() {
    setPaused(pre => !pre)
  }

  function prev() {
    
  }

  function next() {
    
  }

  const onValue = useCallback(function onValue(val: number) {
    console.log("Changed");
  }, [])
  
  const statusIcon = paused ? (
    <PauseIcon
      stroke="black"
      strokeWidth={4}
      className={clsx(styles.icon, styles.status, styles.pause)}
    />
  ) : (
    <PlayIcon
      fill='black'
      stroke="none"
      className={clsx(styles.icon, styles.status, styles.play)}
    />
  )

  return <div className={styles.controller}>
    <div className={styles.buttons}>
      <ControllerButton onClick={prev}>
        <BackwardIcon
          fill='white'
          stroke='none'
          strokeWidth={1.5}
          className={styles.icon}
        />
      </ControllerButton>
      <ControllerButton onClick={toggle}>
        { statusIcon }
      </ControllerButton>
      <ControllerButton onClick={next}>
        <ForwardIcon
          fill='white'
          stroke='none'
          strokeWidth={1.5}
          className={styles.icon}
        />
      </ControllerButton>
    </div>
    <div className={styles.songProgress}>
      <div className={styles.time}>0:00</div>
      <ProgressBar onValue={onValue} className={styles.progress} />
      <div className={styles.time}>2:54</div>
    </div>
  </div>
}

function ControllerButton({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren) {
  return <button {...props} className={styles.button}>
    { children }
  </button>
}