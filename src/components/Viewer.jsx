import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Suspense, useEffect, useState } from "react"
import { Center, Html, OrbitControls, useAnimations, useGLTF, useProgress } from "@react-three/drei"
import ReactSlider from "react-slider"
import { Play16Filled, Pause16Filled } from "@ricons/fluent"
import { Icon } from "@ricons/utils"

function Model({ path, playbackSpeed, currentAnimationTime, isPlaying }) {
    const { scene, animations } = useGLTF(path)
    const { actions, names } = useAnimations(animations, scene)
    const duration = actions[names[0]].getClip().duration

    const state = useThree()


    useEffect(() => {
        state.camera.position.set(1, 3, 2)
    }, [])

    useEffect(() => {
        actions[names[0]].setEffectiveTimeScale(playbackSpeed).play()
    }, [playbackSpeed])

    useFrame((state) => {
        let elapsedTime = actions[names[0]].time
        currentAnimationTime((elapsedTime / duration) * 100)

        if (isPlaying == false) {
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

    return (
        <>
            <div className="top-[100px] right-[20px] absolute bg-white z-10 w-[400px] h-[200px] text-center">
                <div className="bg-zinc-800 p-">
                    <h1 className="font-bold text-2xl whitespace-nowrap text-white">Control panel</h1>
                </div>


                <div className="w-full h-full flex flex-col items-center">
                    <div className="flex flex-row">
                        <h1 className="font-bold text-xl whitespace-nowrap">Playback speed</h1>
                        <ReactSlider
                            className="top-[5px] w-[150px] h-[10px] bg-zinc-700 rounded-lg"
                            thumbClassName="top-[-2.5px] w-[15px] h-[15px] bg-zinc-900 rounded-lg cursor-pointer"
                            min={0}
                            max={100}
                            value={playbackSpeedValue * 100}
                            onChange={(playbackSpeedValue) => setPlaybackSpeedValue(playbackSpeedValue / 100)}
                        />

                    </div>
                    <div className="flex flex-row items-center">
                        <h1 className="mt-[13px] font-bold text-xl whitespace-nowrap">Animation</h1>
                        <ReactSlider
                            className="top-[5px] w-[150px] h-[10px] bg-zinc-700 rounded-lg"
                            thumbClassName="top-[-2.5px] w-[15px] h-[15px] bg-zinc-900 rounded-lg cursor-pointer"
                            min={0}
                            max={100}
                            value={elapsedTime}
                        />

                        <button onClick={() => setIsPlaying(!isPlaying)} className="bg-zinc-300 rounded-sm flex items-center h-10 w-10">
                            <Icon size={20}>
                                {isPlaying ? <Pause16Filled className="text-zinc-500" /> : <Play16Filled className="text-zinc-500" />}
                            </Icon>
                        </button>
                    </div>

                </div>

            </div>
            <div className="w-full h-[100vh] bg-zinc-500">
                <Canvas>
                    <Suspense fallback={<Loader />}>
                        <Model path={modelPath} playbackSpeed={playbackSpeedValue} currentAnimationTime={setElapsedTime} isPlaying={isPlaying} />
                    </Suspense>
                    <ambientLight />
                    <directionalLight position={[1, 20, 1]} />
                    <OrbitControls />
                </Canvas>
            </div>

        </>
    )
} 