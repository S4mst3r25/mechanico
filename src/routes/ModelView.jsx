import { useParams } from "react-router-dom"
import Viewer from "src/components/Viewer"
import modelsJson from "src/models.json"
import Error from "src/Error"
import { useState } from "react"

export default function ModelView() {
    const { id } = useParams()
    let foundModel = false

    const models = modelsJson.models

    let modelName = ""
    let modelPath = ""

    for (let i = 0; i < models.length; i++) {
        if (models[i].id == id) {
            modelName = models[i].name
            modelPath = models[i].path
            foundModel = true
        }
    }

    return (
        <>
           {foundModel ? <Viewer modelPath={modelPath} /> : <Error/>} 
        </>
    )
}