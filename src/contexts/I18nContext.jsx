import React, { createContext, useState, useMemo, useContext } from 'react'
import translations from '@/assets/files/translations.json'

const I18nContext = createContext(null)

export const I18nProvider = ({ children }) => {
  let defaultLang = localStorage.getItem('lang')
  if (!defaultLang) defaultLang = 'en'

  const [lang, setLang] = useState(defaultLang)

  const setLanguage = (l) => {
    setLang(l)
    try {
      localStorage.setItem('lang', l)
    } catch (e) {}
  }

  const t = (key) => {
    return (
      (translations[lang] && translations[lang][key]) ||
      (translations['en'] && translations['en'][key]) ||
      key
    )
  }

  const value = useMemo(() => ({ lang, setLanguage, t }), [lang])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export const useI18n = () => {
  const ctx = useContext(I18nContext)
  if (!ctx) {
    throw new Error('useI18n must be used within I18nProvider')
  }
  return ctx
}
