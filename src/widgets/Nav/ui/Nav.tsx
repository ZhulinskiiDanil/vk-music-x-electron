import styles from './main.module.scss'
import clsx from 'clsx'

export function Nav({ className }: { className: string }) {
  const classList = clsx(styles.nav, className)

  return <nav className={classList}>
    Navigation
  </nav>
}