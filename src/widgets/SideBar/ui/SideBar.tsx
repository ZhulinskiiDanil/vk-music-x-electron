import styles from './main.module.scss'
import { clsx } from 'clsx'

// Components
import { Nav } from '../Nav/ui/Nav'
import { Playlists } from '../Playlists/ui/Playlists'

export function SideBar({ className }: { className?: string }) {
  const classList = clsx(styles.sidebar, className)

  return <div className={classList}>
    <Nav />
    <Playlists />
  </div>
}