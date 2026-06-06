import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Portfolio } from './pages/Portfolio'
import ProjectPage from './pages/Project'
import './styles/main.scss'
import './styles/theme.scss'
import './styles/webkit.scss'

const App = () => {
  return (
    <div className='portfolioContent'>
      <Routes>
        <Route path='/' element={<Portfolio />} />
        <Route path='/project/:id' element={<ProjectPage />} />
      </Routes>
    </div>
  )
}

export default App
