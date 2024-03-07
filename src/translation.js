import i18next from "i18next"
import { initReactI18next } from "react-i18next"

export default i18next
.use(initReactI18next)
.init({
    lng: 'en',
    fallbackLng: 'en',
    resources: {
        en: {
          translation: {
            "translateTo": "Български",
            "welcomeMesagge": "Welcome to Mehanico!",
            "description": "A library of interactive 3D mechanisms.",
            "libraryButton": "Library",
            "aboutButton": "About",
            "aboutUs": "blah blah blah",
            "getStartedButton": "Get started",
            library:{
                "header": "Models library",
                "diff": "Differential",
                "engine": "Engine",
                "blower": "Roots blower",
                "wankel": "Wankel engine",
                "robo-arm": "Robotic arm gripper",
                "suspension": "Double wishbone suspension"
            }
          }
        },
        bg: {
            translation: {
                "translateTo": "English",
                "welcomeMesagge": "Добре дошли в Механико!",
                "description": "Блиотека от интерактивни 3D механизми.",
                "libraryButton": "Библиотека",
                "aboutButton": "За нас",
                "aboutUs": "блах блах блах",
                "getStartedButton": "Започни",
                library:{
                    "header": "Библиотека с модели",
                    "diff": "Диференциал",
                    "engine": "Двигател",
                    "blower": "Нагнетателна помпа",
                    "wankel": "Ванкелов двигател",
                    "robo-arm": "Механична роботска ръка",
                    "suspension": "Двойно напречно окачване"
                }
            }
        }
      }
})