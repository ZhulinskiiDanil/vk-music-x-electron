import styles from './main.module.scss'
import { PropsWithChildren } from 'react'

// Components
import { Content } from '@/widgets/Content/ui/Content'
import { Controller } from '@/widgets/Controller/ui/Controller'
import { Nav } from '@/widgets/Nav/ui/Nav'

export function MainWrapper({ children }: PropsWithChildren) {
  return <div className={styles.wrapper}>
    <Nav className={styles.nav} />
    <Content className={styles.content}>
      { children }
    </Content>
    <Controller className={styles.controller} />
  </div>
}