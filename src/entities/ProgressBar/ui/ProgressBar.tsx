import styles from './main.module.scss'
import clsx from 'clsx'

// Hooks
import { useProgress } from '../model/useProgress'

export function ProgressBar({
  className, onValue, progress, ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  progress?: number, onValue?: (value: number) => void
}) {
  const { ref, active } = useProgress(onValue, progress)
  const classList = clsx(styles.progress, className, {
    [styles.active]: active
  })

  return <div ref={ref} className={classList} {...props}>
    <div className={styles.fill} />
  </div>
}