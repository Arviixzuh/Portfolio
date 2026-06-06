import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { I18nProvider } from '@/contexts/I18nContext'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nProvider>
        <App />
      </I18nProvider>
    </BrowserRouter>
  </React.StrictMode>
)
