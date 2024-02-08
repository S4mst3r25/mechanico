import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect } from "react"
import { Environment, OrbitControls, useAnimations, useGLTF } from '@react-three/drei'

function Model({ path }) {
    const { scene, animations } = useGLTF(path)
    const { actions, names } = useAnimations(animations, scene)
   
    useEffect(() => {
        actions[names[0]].play()
    }, [])

    return (
        <>
            <primitive object={scene} />
        </>
    )
}

export default function Viewer({ modelPath }) {

    return (
        <>
            <div className="size-full bg-gray-600">
                <Canvas camera={{ fov: 35, zoom: 5, near: 1, far: 1000 }}>
                    <Suspense fallback={null}>
                        <Model path={modelPath} />
                    </Suspense>
                    <Environment preset="sunset" />
                    <OrbitControls />
                </Canvas>
            </div>

        </>
    )
} 