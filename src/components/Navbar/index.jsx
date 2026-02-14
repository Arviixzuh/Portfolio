import React from 'react'
import { Themes } from './Themes'
import './Navbar.scss'

export const Navbar = () => {
  const profileRef = React.useRef(null)

  const [theme, setTheme] = React.useState(() => {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme === Themes.light.name) {
      return Themes.light
    }

    return Themes.dark
  })

  React.useEffect(() => {
    document.body.classList.remove(Themes.light.name, Themes.dark.name)
    document.body.classList.add(theme.name)
    localStorage.setItem('theme', theme.name)
  }, [theme])

  React.useEffect(() => {
    const handleScroll = () => {
      if (!profileRef.current) return
      profileRef.current.style.opacity = window.scrollY > 100 ? '1' : '0'
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const changeTheme = () => {
    setTheme((prev) => (prev.name === Themes.light.name ? Themes.dark : Themes.light))
  }

  return (
    <nav className='navbarContainer'>
      <div className='navbarProfileContainer' ref={profileRef}>
        <img src='https://avatars.githubusercontent.com/u/94721992?v=4' alt='Profile' />
        <h1>Arviixzuh</h1>
      </div>
      <span onClick={changeTheme} className='changeThemeIcon'>
        {theme.icon}
      </span>
    </nav>
  )
}
