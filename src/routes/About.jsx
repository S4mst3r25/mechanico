import { useTranslation } from "react-i18next"

export default function About() {
    const { t } = useTranslation()
    return (
        <div className="mt-32 max-w-[900px] mx-auto text-center">
            <h1 className="font-bold text-4xl mb-4">{t("about.title")}</h1>
            <p className="text-xl mt-16">{t("about.description")}</p>
        </div>
    )
}