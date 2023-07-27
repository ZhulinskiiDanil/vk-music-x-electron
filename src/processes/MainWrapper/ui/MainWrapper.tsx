import styles from './main.module.scss'
import { PropsWithChildren } from 'react'

// Components
import { Content } from '@/widgets/Content/ui/Content'
import { Footer } from '@/widgets/Footer/ui/Footer'
import { SideBar } from '@/widgets/SideBar/ui/SideBar'

export function MainWrapper({ children }: PropsWithChildren) {
  return <div className={styles.wrapper}>
    <SideBar className={styles.sidebar} />
    <Content className={styles.content}>
      { children }
    </Content>
    <Footer className={styles.footer} />
  </div>
}