import Card from 'src/components/Card.jsx'
import differential from 'src/assets/images/thumbnails/differential.png'

export default function Library() {
    return (
        <>
            <h1 className="font-bold text-3xl mt-36 text-center">Models library</h1>
            <div className="m-auto">
                <div className="flex flex-wrap mt-16 gap-4 justify-center">
                    <Card img={differential} name="Differential" modelId="differential"/>
                </div>
            </div>
        </>
    )
}