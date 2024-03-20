import { useParams } from "react-router-dom"
import Viewer from "src/components/Viewer"
import modelsJson from "src/models.json"
import Error from "src/Error"

export default function ModelView() {
    const { id } = useParams()
    let foundModel = false

    const models = modelsJson.models

    let modelId = ""
    let modelPath = ""

    for (let i = 0; i < models.length; i++) {
        if (models[i].id == id) {
            modelId = models[i].id
            modelPath = models[i].path
            foundModel = true
        }
    }

    return (
        <>
           {foundModel ? <Viewer modelPath={modelPath} modelId={modelId} /> : <Error/>} 
        </>
    )
}