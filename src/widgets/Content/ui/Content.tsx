import styles from './main.module.scss'
import { PropsWithChildren } from 'react'
import clsx from 'clsx'

export function Content({
  children, className
}: PropsWithChildren & { className: string }) {
  const classList = clsx(styles.content, className)

  return <div className={classList}>
    { children }
  </div>
}