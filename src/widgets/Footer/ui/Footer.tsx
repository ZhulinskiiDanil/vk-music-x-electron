import styles from './main.module.scss'
import clsx from 'clsx'

// Components
import { CurrentSong } from '../CurrentSong/ui/CurrentSong'
import { Controller } from '../Controller/ui/Controller'
import { Tools } from '../Tools/ui/Tools'

export function Footer({ className }: { className: string }) {
  const classList = clsx(styles.footer, className)
  
  return <footer className={classList}>
    <CurrentSong />
    <Controller />
    <Tools />
  </footer>
}