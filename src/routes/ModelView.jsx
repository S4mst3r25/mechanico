import { useParams } from "react-router-dom"
import Viewer from "src/components/Viewer"
import modelsJson from "src/models.json"

export default function ModelView() {
    const { id } = useParams()

    const models = modelsJson.models

    let modelName = ""
    let modelPath = ""

    for (let i = 0; i < models.length; i++) {
        if (models[i].id == id) {
            modelName = models[i].name
            modelPath = models[i].path
        }
    }

    return (
        <>
            <h1 className="text-center mt-[130px] font-bold text-4xl">{modelName}</h1>
            <Viewer modelPath={modelPath} />
        </>
    )
}