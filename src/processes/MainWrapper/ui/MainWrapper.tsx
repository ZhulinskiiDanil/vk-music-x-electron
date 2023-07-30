import styles from './main.module.scss'
import clsx from 'clsx'

// Types
import { PropsWithChildren } from 'react'

// Components
import { Content } from '@/widgets/Content/ui/Content'
import { Footer } from '@/widgets/Footer/ui/Footer'
import { SideBar } from '@/widgets/SideBar/ui/SideBar'
import { TitleBar } from '@/widgets/TitleBar/ui/TitleBar'

export function MainWrapper({
  children, className,
  sidebar = false, footer = false
}: PropsWithChildren & {
  className?: string,
  sidebar?: boolean,
  footer?: boolean
}) {
  return <div className={styles.wrapper}>
    <TitleBar />
    {sidebar && <SideBar className={styles.sidebar} />}
    <Content className={clsx(styles.content, className)}>
      { children }
    </Content>
    {footer && <Footer className={styles.footer} />}
  </div>
}