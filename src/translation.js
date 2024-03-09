import i18next from "i18next"
import { initReactI18next } from "react-i18next"
import translationBG from "src/assets/translations/translationBG.json"
import traslationEN from "src/assets/translations/translationEN.json"

export default i18next
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    resources: {
      en: {
        translation: traslationEN
      },
      bg: {
        translation: translationBG
      }
    }
  })