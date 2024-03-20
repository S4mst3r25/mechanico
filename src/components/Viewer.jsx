import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Suspense, useEffect, useState } from "react"
import { Center, Html, OrbitControls, useAnimations, useGLTF, useProgress } from "@react-three/drei"
import ReactSlider from "react-slider"
import { Play16Filled, Pause16Filled } from "@ricons/fluent"
import { Icon } from "@ricons/utils"
import { useTranslation } from "react-i18next"

function Model({ path, playbackSpeed, setCurrentAnimationTime, isPlaying, currentAnimationTime }) {
    const { scene, animations } = useGLTF(path)
    const { actions, names } = useAnimations(animations, scene)

    const animationDuration = actions[names[0]].getClip().duration

    const { camera, clock } = useThree()

    useEffect(() => {
        camera.position.set(1, 3, 2)
    }, [])

    useEffect(() => {
        actions[names[0]].setEffectiveTimeScale(playbackSpeed).play()
    }, [playbackSpeed])

    useEffect(() => {
        actions[names[0]].time = (setCurrentAnimationTime / 100) * animationDuration
    }, [setCurrentAnimationTime])

    useFrame(() => {
        const elapsedTime = actions[names[0]].time
        currentAnimationTime((elapsedTime / animationDuration) * 100)

        isPlaying ? clock.start() : clock.stop()
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

export default function Viewer({ modelPath, modelId }) {
    const [playbackSpeed, setPlaybackSpeed] = useState(0.5)
    const [elapsedTime, setElapsedTime] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)
    const [animationTime, setAnimationTime] = useState(0)
    const { t } = useTranslation()

    return (
        <>
            <h1 className="bg-zinc-500 top-[85px] right-[20px] w-[380px] absolute text-center text-white text-3xl font-bold whitespace-nowrap z-20">{t('library.models.' + modelId)}</h1>
            <div className="top-[134px] right-[20px] absolute bg-white z-10 w-[380px] text-center h-min shadow-md">
                <div className="bg-zinc-800 p-3">
                    <h1 className="font-bold text-xl whitespace-nowrap text-white">{t("viewer.controls")}</h1>
                </div>
                <div className="w-full h-full flex flex-col space-y-1 p-1">
                    <div className="flex flex-row items-center bg-zinc-200 p-2 space-x-4 pl-3">
                        <h1 className="text-lg whitespace-nowrap">{t("viewer.speed")}</h1>
                        <ReactSlider
                            className="w-[150px] h-[8px] bg-zinc-400 rounded-sm flex items-center"
                            thumbClassName="w-[15px] h-[15px] bg-zinc-900 rounded-sm cursor-pointer"
                            min={0}
                            max={100}
                            value={playbackSpeed * 100}
                            onChange={(playbackSpeed) => setPlaybackSpeed(playbackSpeed / 100)}
                        />

                    </div>
                    <div className="flex flex-row items-center bg-zinc-200 p-2 space-x-4 pl-3">
                        <h1 className="text-lg whitespace-nowrap">{t("viewer.animation")}</h1>
                        <ReactSlider
                            className="w-[200px] h-[8px] bg-zinc-400 rounded-sm flex items-center"
                            thumbClassName="bg-zinc-500 w-[10px] h-[15px] bg-zinc-900 rounded-sm cursor-pointer"
                            min={0}
                            max={100}
                            value={elapsedTime}
                            onChange={(animationTime) => setAnimationTime(animationTime)}
                        />

                        <button onClick={() => setIsPlaying(!isPlaying)} className="bg-zinc-300 flex items-center rounded-sm justify-center h-8 w-8 hover:bg-[#b4b4b8] transition">
                            <Icon size={20}>
                                {isPlaying ? <Pause16Filled className="text-zinc-500" /> : <Play16Filled className="text-zinc-500 mr-[2px]" />}
                            </Icon>
                        </button>
                    </div>
                </div>

            </div>
            <div className="w-full h-[100vh] bg-zinc-500">
                <Canvas>
                    <Suspense fallback={<Loader />}>
                        <Model path={modelPath} playbackSpeed={playbackSpeed} currentAnimationTime={setElapsedTime} isPlaying={isPlaying} setCurrentAnimationTime={animationTime} />
                    </Suspense>
                    <ambientLight intensity={0.7} />
                    <directionalLight position={[1, 20, 1]} />
                    <OrbitControls />
                </Canvas>
            </div>

        </>
    )
} 