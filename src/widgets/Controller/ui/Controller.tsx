import styles from './main.module.scss'
import clsx from 'clsx'
import { PropsWithChildren, useState } from 'react'
import { PauseIcon, PlayIcon } from '@/shared/icons'

export function Controller({ className }: { className: string }) {
  const [paused, setPaused] = useState(false)
  const classList = clsx(styles.container, className)

  function toggle() {
    setPaused(pre => !pre)
  }

  const icon = paused ? (
    <PauseIcon
      stroke="black"
      strokeWidth={1.5}
      className={clsx(styles.icon, styles.status, styles.pause)}
    />
  ) : (
    <PlayIcon
      stroke="black"
      strokeWidth={1.5}
      className={clsx(styles.icon, styles.status, styles.play)}
    />
  )
  
  return <div className={classList}>
    <div className={styles.currentSong}>
      {/* TO WIDGET */}
    </div>
    <div className={styles.controller}>
      <div className={styles.buttons}>
        <ControllerButton onClick={toggle}>
          { icon }
        </ControllerButton>
      </div>
      <div className={styles.songProgress}>
        <div className={styles.time}>0:00</div>
        <div className={styles.progress}>
          <div className={styles.fill} />
        </div>
        <div className={styles.time}>2:54</div>
      </div>
    </div>
    <div className={styles.tools}>

    </div>
  </div>
}

function ControllerButton({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren) {
  return <button {...props} className={styles.button}>
    { children }
  </button>
}