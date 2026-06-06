import React from 'react'
import { Themes } from './Themes'
import { useI18n } from '@/contexts/I18nContext'
import { useLocation, Link } from 'react-router-dom'
import './Navbar.scss'

export const Navbar = () => {
  const profileRef = React.useRef(null)
  const location = useLocation()
  const { lang, setLanguage, t } = useI18n()

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
      if (location.pathname.startsWith('/project')) {
        profileRef.current.style.opacity = '1'
        return
      }
      profileRef.current.style.opacity = window.scrollY > 100 ? '1' : '0'
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location])

  const changeTheme = () => {
    setTheme((prev) => (prev.name === Themes.light.name ? Themes.dark : Themes.light))
  }

  const toggleLang = () => setLanguage(lang === 'en' ? 'es' : 'en')

  return (
    <nav className='navbarContainer'>
      <Link to='/' className='navbarProfileLink'>
        <div className='navbarProfileContainer' ref={profileRef}>
          <img src='https://avatars.githubusercontent.com/u/94721992?v=4' alt='Profile' />
          <h1>{t('name')}</h1>
        </div>
      </Link>
      <div className='navbarButtonsContainer'>
        <button className='changeLang' onClick={toggleLang} title={t('change_language')}>
          {lang.toUpperCase()}
        </button>
        <button onClick={changeTheme} className='changeThemeIcon'>
          {theme.icon}
        </button>
      </div>
    </nav>
  )
}
