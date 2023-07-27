import styles from './main.module.scss'

// Components
import { VolumeMixer } from '../VolumeMixer/ui/VolumeMixer'

export function Tools() {
  return <div className={styles.tools}>
    {/* <button>Tool</button>
    <button>Tool</button>
    <button>Tool</button> */}
    <VolumeMixer />
  </div>
}