import styles from './main.module.scss'
import clsx from 'clsx'

// Types
import { PropsWithChildren } from 'react'

export function Content({
  children, className
}: PropsWithChildren & { className: string }) {
  const classList = clsx(styles.content, className)

  return <div className={classList}>
    { children }
  </div>
}