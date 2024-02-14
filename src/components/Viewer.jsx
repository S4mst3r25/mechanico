import { Canvas, useThree } from '@react-three/fiber'
import { Suspense, useEffect } from "react"
import { Center, Html, OrbitControls, useAnimations, useGLTF, useProgress } from '@react-three/drei'
import ReactSlider from "react-slider"

function Model({ path }) {
    const { scene, animations } = useGLTF(path)
    const { actions, names } = useAnimations(animations, scene)

    const state = useThree()

    state.camera.position.set(1, 3, 2)

    useEffect(() => {
        actions[names[0]].setEffectiveTimeScale(0.4).play()
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
            <div>
                <ReactSlider
                    className='left-[20px] top-[100px] absolute z-10 w-[150px] h-[10px] bg-zinc-700 rounded-lg'
                    trackClassName=''
                    thumbClassName='top-[-2.5px] w-[15px] h-[15px] bg-zinc-900 rounded-lg'
                    min={0}
                    max={100}
                />
            </div>
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