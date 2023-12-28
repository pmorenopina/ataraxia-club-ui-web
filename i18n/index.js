import es from './es.json'
import en from './en.json'

const i18n = {
  translations: {
    es,
    en,
  },
  defaultLang: 'es',
  useBrowserDefault: true,
  languageDataStore: 'localStorage',
}

module.exports = i18n
