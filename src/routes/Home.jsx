import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import gear from 'src/assets/images/gear.png'

export default function Home() {
  const navigate = useNavigate()
  const [t] = useTranslation()

  return (
    <div className="text-center mt-60 overflow-hidden h-[100vh]">
      <h1 className="font-bold text-6xl mb-4">{t('welcomeMesagge')}</h1>
      <p className="font-bold text-2xl">{t('description')}</p>
      <button onClick={() => { navigate("library") }} className="mt-10 bg-zinc-700 p-3 text-white font-bold text-xl rounded-[4px] hover:bg-zinc-800 transition">{t("getStartedButton")}</button>
      <img src={gear} className="animatedGear mt-40 mx-auto" />
    </div>
  )
}
