import Card from '../components/Card.jsx'
import differential from '../assets/images/thumbnails/differential.png'

export default function Library() {
    return (
        <>
            <h1 className="font-bold text-2xl mt-10 text-center">Models library</h1>
            <div className="m-auto">
                <div className="flex flex-wrap mt-16 gap-4 justify-center">
                    <Card img={differential} name="Differential" />
                    <Card img={differential} name="Differential" />
                    <Card img={differential} name="Differential" />
                    <Card img={differential} name="Differential" />
                    <Card img={differential} name="Differential" />
                    <Card img={differential} name="Differential" />
                </div>
            </div>
        </>
    )
}