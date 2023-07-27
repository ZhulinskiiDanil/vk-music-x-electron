import styles from './main.module.scss'
import { PropsWithChildren } from 'react'

// Components
import { Content } from '@/widgets/Content/ui/Content'
import { Footer } from '@/widgets/Footer/ui/Footer'
import { SideBar } from '@/widgets/SideBar/ui/SideBar'
import { TitleBar } from '@/widgets/TitleBar/ui/TitleBar'

export function MainWrapper({ children }: PropsWithChildren) {
  return <div className={styles.wrapper}>
    <TitleBar />
    <SideBar className={styles.sidebar} />
    <Content className={styles.content}>
      { children }
    </Content>
    <Footer className={styles.footer} />
  </div>
}