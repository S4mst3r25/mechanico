import { Canvas, useThree } from '@react-three/fiber'
import { Suspense, useEffect, useState } from "react"
import { Center, Html, OrbitControls, useAnimations, useGLTF, useProgress } from '@react-three/drei'
import ReactSlider from "react-slider"

function Model({ path , sliderValue }) {
    const { scene, animations } = useGLTF(path)
    const { actions, names } = useAnimations(animations, scene)

    const state = useThree()

    state.camera.position.set(1, 3, 2)

    useEffect(() => {
        actions[names[0]].setEffectiveTimeScale(sliderValue).play()
    }, [sliderValue])

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
        let [value, setValue] = useState(1)
        
    return (
        <>
            <div className='top-[100px] left-[20px] absolute'>
                <h1 className='font-bold text-xl text-white whitespace-nowrap'>Playback speed</h1>
                <ReactSlider
                    className='top-[8px] z-10 w-[150px] h-[10px] bg-zinc-700 rounded-lg'
                    trackClassName=''
                    thumbClassName='top-[-2.5px] w-[15px] h-[15px] bg-zinc-900 rounded-lg'
                    min={0}
                    max={100}
                    defaultValue={0}
                    value={value * 100}
                    onChange={(value) => setValue(value / 100)}
                />
            </div>
            <div className="w-full h-[100vh] bg-zinc-600">
                <Canvas>
                    <Suspense fallback={<Loader />}>
                        <Model path={modelPath} sliderValue={value}/>
                    </Suspense>
                    <ambientLight />
                    <directionalLight position={[1, 20, 1]} />
                    <OrbitControls makeDefault={true} />
                </Canvas>
            </div>

        </>
    )
} 