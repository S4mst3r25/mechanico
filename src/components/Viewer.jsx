import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useEffect, useRef } from "react"
import { OrbitControls, Stats, useAnimations, useGLTF } from '@react-three/drei'

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
            <div className="w-full h-[100vh] bg-zinc-400">
                <Canvas camera={{ fov: 35, zoom: 5, near: 1, far: 1000 }}>
                    <Suspense fallback={null}>
                        <Model path={modelPath} />
                    </Suspense>
                    <ambientLight />
                    <directionalLight position={[1, 20, 1]} />
                    <OrbitControls />
                </Canvas>
            </div>

        </>
    )
} 