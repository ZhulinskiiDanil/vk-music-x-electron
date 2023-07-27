import styles from './main.module.scss'
import clsx from 'clsx'

// Components
import { Link } from 'react-router-dom'
import { HomeIcon, SearchIcon } from '@/shared/icons'

export function Nav({ className }: { className?: string }) {
  const classList = clsx(styles.nav, className)

  return <nav className={classList}>
    <NavItem
      link='/'
      title='Главная'
      Icon={HomeIcon}
    />
    <NavItem
      link='/search'
      title='Поиск'
      Icon={SearchIcon}
    />
  </nav>
}

interface INavItemProps {
  link: string
  title: string
  Icon: React.FC<React.SVGAttributes<SVGSVGElement>>
}

function NavItem({ link, title, Icon }: INavItemProps) {
  return (
    <Link to={link}>
      <div className={styles.link}>
        <Icon
          stroke="white"
          strokeWidth={1.5}
          className={styles.icon}
        />
        <div className={styles.title}>
          { title }
        </div>
      </div>
    </Link>
  )
}