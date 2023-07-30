import './index.scss'
import ReactDOM from 'react-dom/client'
import { AppRouter } from './app/AppRouter'
import { WithProviders } from './app/WithProviders'

ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <WithProviders>
      <AppRouter />
    </WithProviders>
  )