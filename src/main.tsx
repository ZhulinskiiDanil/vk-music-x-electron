import './index.scss'
import ReactDOM from 'react-dom/client'
import { AppRouter } from './app/Router'

ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(<AppRouter />)