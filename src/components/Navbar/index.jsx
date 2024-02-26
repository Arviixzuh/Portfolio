import React from 'react'
import Arvii from '../../assets/img/Arvii.jpg'
import { Themes } from './Themes'
import './Navbar.scss'

export const Navbar = () => {
  const [theme, setTheme] = React.useState(Themes.ligh)
  const profileRef = React.useRef(null)

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 100
        ? (profileRef.current.style.opacity = 1)
        : (profileRef.current.style.opacity = 0)
    })
  }, [])

  React.useEffect(() => {
    const temaGuardado = localStorage.getItem('theme')
    if (temaGuardado) {
      setTheme(temaGuardado == 'ligh' ? Themes.ligh : Themes.nigth)
      document.body.classList.add(temaGuardado)
    }
  }, [])

  const changeTheme = () => {
    document.body.classList.toggle('nigth')
    setTheme(theme.name == 'ligh' ? Themes.nigth : Themes.ligh)
    localStorage.setItem('theme', theme.name == 'ligh' ? Themes.nigth.name : Themes.ligh.name)
  }

  return (
    <nav className='navbarContainer'>
      <div className='navbarProfileContainer' ref={profileRef}>
        <img src={Arvii} />
        <h1>Arviixzuh</h1>
      </div>
      <span onClick={() => changeTheme()} className='changeThemeIcon'>
        {theme.icon}
      </span>
    </nav>
  )
}
