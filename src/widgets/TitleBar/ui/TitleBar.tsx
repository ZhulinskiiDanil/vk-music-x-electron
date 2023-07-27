import { ipcRenderer } from 'electron'
import styles from './main.module.scss'
import clsx from 'clsx'

// Components
import { MinusIcon, WindowsIcon, XMarkIcon } from '@/shared/icons'

export function TitleBar() {
  const iconProps = {
    className: styles.icon,
    stroke: "white"
  }

  function close() {
    ipcRenderer.invoke("close-window")
  }

  function hide() {
    ipcRenderer.invoke("hide-window")
  }

  function fullscreen() {
    ipcRenderer.invoke("fullscreen-window")
  }

  return <div className={styles.titlebar}>
    <div className={styles.title}>
      vk music x
    </div>
    <div className={styles.tools}>
      <button onClick={hide} className={clsx(styles.tool, styles.hide)}>
        <MinusIcon { ...iconProps } />
      </button>
      <button onClick={fullscreen} className={clsx(styles.tool, styles.fullscreen)}>
        <WindowsIcon { ...iconProps } />
      </button>
      <button onClick={close} className={clsx(styles.tool, styles.close)}>
        <XMarkIcon { ...iconProps } />
      </button>
    </div>
  </div>
}