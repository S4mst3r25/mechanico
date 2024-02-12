import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect } from "react"
import { Grid, Html, OrbitControls, useAnimations, useGLTF, useProgress } from '@react-three/drei'

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

function Loader(){
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
                <Canvas camera={{ fov: 35, zoom: 5, near: 1, far: 1000 }}>
                    <Suspense fallback={<Loader/>}>
                        <Model path={modelPath} />
                    </Suspense>
                    <ambientLight />
                    <directionalLight position={[1, 20, 1]} />
                    <Grid args={[5,5]}/>
                    <axesHelper args={[5]}/>
                    <OrbitControls />
                </Canvas>
            </div>

        </>
    )
} 