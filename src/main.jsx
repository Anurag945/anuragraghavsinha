import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import './index.css'
import App from './App.jsx'
import { AudienceProvider } from './context/audience'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AudienceProvider>
        <App />
        {/* Private analytics — data shows only in your Vercel dashboard, never on the site.
            Does nothing on localhost; auto-activates once deployed to Vercel. */}
        <Analytics />
      </AudienceProvider>
    </BrowserRouter>
  </StrictMode>,
)
