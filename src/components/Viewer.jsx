import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Suspense, useEffect, useState } from "react"
import { Center, Html, OrbitControls, useAnimations, useGLTF, useProgress } from "@react-three/drei"
import ReactSlider from "react-slider"
import { Play16Filled, Pause16Filled } from "@ricons/fluent"
import { Icon } from "@ricons/utils"

function Model({ path, playbackSpeed, callbackProp, playPauseProp }) {
    const { scene, animations } = useGLTF(path)
    const { actions, names } = useAnimations(animations, scene)

    const state = useThree()


    useEffect(() => {
        state.camera.position.set(1, 3, 2)
    }, [])

    useEffect(() => {
        actions[names[0]].setEffectiveTimeScale(playbackSpeed).play()
    }, [playbackSpeed])

    function callbackFunction(elapsedTime, duration) {
        callbackProp((elapsedTime / duration) * 100)
    }

    useFrame((state) => {
        const duration = actions[names[0]].getClip().duration
        let elapsedTime = actions[names[0]].time
        callbackFunction(elapsedTime, duration)

        if (elapsedTime >= duration) {
            elapsedTime = 0
        }
        if (playPauseProp == false) {
            state.clock.stop()
        }
        else {
            state.clock.start()
        }
    })

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
    const [playbackSpeedValue, setPlaybackSpeedValue] = useState(0.5)
    const [elapsedTime, setElapsedTime] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)

    function handleCallback(value) {
        setElapsedTime(value)
    }

    return (
        <>
            <div className="top-[100px] right-[20px] absolute">
                <h1 className="font-bold text-xl text-white whitespace-nowrap">Playback speed</h1>
                <ReactSlider
                    className="top-[5px] z-10 w-[150px] h-[10px] bg-zinc-700 rounded-lg"
                    thumbClassName="top-[-2.5px] w-[15px] h-[15px] bg-zinc-900 rounded-lg cursor-pointer"
                    min={0}
                    max={100}
                    value={playbackSpeedValue * 100}
                    onChange={(playbackSpeedValue) => setPlaybackSpeedValue(playbackSpeedValue / 100)}
                />
                <h1 className="mt-[13px] font-bold text-xl text-white whitespace-nowrap">Elapsed time</h1>
                <ReactSlider
                    className="top-[5px] z-10 w-[150px] h-[10px] bg-zinc-700 rounded-lg"
                    thumbClassName="top-[-2.5px] w-[15px] h-[15px] bg-zinc-900 rounded-lg"
                    min={0}
                    max={100}
                    value={elapsedTime}
                />
                <div className="flex justify-center items-center mt-[5px]">
                    <Icon size={20} color="rgb(24 24 27)">
                        <Pause16Filled className="mt-[5px] z-10 cursor-pointer" onClick={() => setIsPlaying(false)} />
                    </Icon>
                    <Icon size={20} color="rgb(24 24 27)">
                        <Play16Filled className="mt-[5px] z-10 cursor-pointer" onClick={() => setIsPlaying(true)} />
                    </Icon>
                </div>
            </div>
            <div className="w-full h-[100vh] bg-zinc-600">
                <Canvas>
                    <Suspense fallback={<Loader />}>
                        <Model path={modelPath} playbackSpeed={playbackSpeedValue} callbackProp={handleCallback} playPauseProp={isPlaying} />
                    </Suspense>
                    <ambientLight />
                    <directionalLight position={[1, 20, 1]} />
                    <OrbitControls />
                </Canvas>
            </div>

        </>
    )
} 