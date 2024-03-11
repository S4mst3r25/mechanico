import { useTranslation } from "react-i18next"
import st_pfp from 'src/assets/images/st-pfp.png'
import rn_pfp from 'src/assets/images/rn-pfp.jpeg'

export default function About() {
    const { t } = useTranslation()
    return (
        <div className="mt-32 max-w-[900px] mx-auto text-center p-8">
            <h1 className="font-bold text-4xl mb-10">{t("about.title")}</h1>
            <p className="text-xl mb-8">{t("about.description")}</p>
            <div className="mt-10 max-w-[600px] mx-auto space-y-6">
                <h2 className="font-bold text-3xl mb-6">Our team</h2>
                <div className="bg-zinc-100 rounded-sm p-2 text-left flex space-x-3 items-center border-2 border-zinc-600 cursor-pointer hover:bg-zinc-200 transition">
                    <img src={st_pfp} className="w-max max-h-32 rounded-sm"></img>
                    <div>
                        <p className="font-bold text-xl mb-4">Samuil Tomov</p>
                        <p className="font-bold"> - Lead Developer / Code Reviewer</p>
                        <p>Has experience with different JavaScript frameworks & backend technologies. Manages the project workflow.</p>
                    </div>
                </div>
                <div className="bg-zinc-100 rounded-sm p-2 text-left flex space-x-3 items-center border-zinc-600 border-2 cursor-pointer hover:bg-zinc-200 transition">
                    <img src={rn_pfp} className="w-max max-h-32 rounded-sm"></img>
                    <div>
                        <p className="font-bold text-xl mb-4">Roberto Nikolov</p>
                        <p className="font-bold"> - Developer / 3D Modelling</p>
                        <p>To be added.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}