import React from 'react'
import { Navbar } from './components/Navbar'
import { Portfolio } from './pages/Portfolio'
import './styles/main.scss'
import './styles/theme.scss'
import './styles/webkit.scss'

const App = () => {
  return (
    <>
      <Navbar />
      <Portfolio />
    </>
  )
}

export default App
