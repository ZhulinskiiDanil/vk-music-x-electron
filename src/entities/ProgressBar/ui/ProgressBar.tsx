import styles from './main.module.scss'
import clsx from 'clsx'

// Hooks
import { useProgress } from '../model/useProgress'

export function ProgressBar({
  className, onValue, progress, zero = false, ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  zero?: boolean,
  progress?: number,
  onValue?: (value: number) => void
}) {
  const { ref, active } = useProgress(onValue, progress)
  const classList = clsx(styles.progress, className, {
    [styles.active]: active,
    [styles.zero]: zero
  })

  return <div ref={ref} className={classList} {...props}>
    <div className={styles.fill} />
  </div>
}