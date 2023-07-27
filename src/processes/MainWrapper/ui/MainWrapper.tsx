import styles from './main.module.scss'
import { PropsWithChildren } from 'react'

// Components
import { Content } from '@/widgets/Content/ui/Content'
import { Footer } from '@/widgets/Footer/ui/Footer'
import { Nav } from '@/widgets/Nav/ui/Nav'

export function MainWrapper({ children }: PropsWithChildren) {
  return <div className={styles.wrapper}>
    <Nav className={styles.nav} />
    <Content className={styles.content}>
      { children }
    </Content>
    <Footer className={styles.footer} />
  </div>
}