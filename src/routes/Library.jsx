import Card from 'src/components/Card.jsx'
import differential from 'src/assets/images/thumbnails/differential.png'
import engine from 'src/assets/images/thumbnails/engine.png'
import rootsblower from 'src/assets/images/thumbnails/rootsblower.png'
import wankel from 'src/assets/images/thumbnails/wankel.png'
import gripper from 'src/assets/images/thumbnails/gripper.png'
import suspension from 'src/assets/images/thumbnails/suspension.png'
import { useTranslation } from 'react-i18next'
import { Suspense } from 'react'

function LoadingScreen() {
    return (
        <>
            <h1 className="text-2xl text-center mt-32">Loading...</h1>
        </>
    )
}

export default function Library() {
    const [t] = useTranslation()
    return (
        <>
            <h1 className="font-bold text-3xl mt-36 text-center">{t('library.title')}</h1>
            <Suspense fallback={<LoadingScreen />}>
                <div className="m-auto">
                    <div className="flex flex-wrap mt-16 gap-4 justify-center mb-14">
                        <Card img={differential} name={t('library.diff')} modelId="differential" />
                        <Card img={engine} name={t('library.engine')} modelId="engine" />
                        <Card img={rootsblower} name={t('library.blower')} modelId="rootsblower" />
                        <Card img={wankel} name={t('library.wankel')} modelId="wankelengine" />
                        <Card img={gripper} name={t('library.robo-arm')} modelId="roboticgripper" />
                        <Card img={suspension} name={t('library.suspension')} modelId="doublewishbonesuspension" />
                    </div>
                </div>
            </Suspense>
        </>
    )
}