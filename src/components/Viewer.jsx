import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect } from "react"
import { Center, Grid, Html, OrbitControls, useAnimations, useGLTF, useProgress } from '@react-three/drei'

function Model({ path }) {
    const { scene, animations } = useGLTF(path)
    const { actions, names } = useAnimations(animations, scene)

    useEffect(() => {
        actions[names[0]].play()
    }, [])

    return (
        <>
            <Center>
                <primitive object={scene} scale={[8, 8, 8]} />
            </Center>
        </>

    )
}

function Loader() {
    const { progress } = useProgress();
    return (
        <>
            <Html center className="font-bold text-2xl text-white whitespace-nowrap">Loading: {progress} %</Html>
        </>
    )
}

export default function Viewer({ modelPath }) {

    return (
        <>
            <div className="w-full h-[100vh] bg-zinc-600">
                <Canvas>
                    <Suspense fallback={<Loader />}>
                        <Model path={modelPath} />
                    </Suspense>
                    <ambientLight />
                    <directionalLight position={[1, 20, 1]} />
                    <OrbitControls makeDefault={true} />

                </Canvas>
            </div>

        </>
    )
} 