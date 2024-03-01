import Card from 'src/components/Card.jsx'
import differential from 'src/assets/images/thumbnails/differential.png'
import engine from 'src/assets/images/thumbnails/engine.png'
import rootsblower from 'src/assets/images/thumbnails/rootsblower.png'
import wankel from 'src/assets/images/thumbnails/wankel.png'
import gripper from 'src/assets/images/thumbnails/gripper.png'

export default function Library() {
    return (
        <>
            <h1 className="font-bold text-3xl mt-36 text-center">Models library</h1>
            <div className="m-auto">
                <div className="flex flex-wrap mt-16 gap-4 justify-center">
                    <Card img={differential} name="Differential" modelId="differential"/>
                    <Card img={engine} name="Engine" modelId="engine"/>
                    <Card img={rootsblower} name="Roots blower" modelId="rootsblower"/>
                    <Card img={wankel} name="Wankel engine" modelId="wankelengine"/>
                    <Card img={gripper} name="Robotic arm gripper" modelId="roboticgripper"/>
                </div>
            </div>
        </>
    )
}