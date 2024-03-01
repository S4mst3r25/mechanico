import { useNavigate } from "react-router-dom"
import gear from 'src/assets/images/gear.png'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="text-center mt-60 overflow-hidden h-[100vh]">
      <h1 className="font-bold text-6xl mb-4">Welcome to Mechanico!</h1>
      <p className="font-bold text-2xl">A library of interactive 3D mechanisms.</p>
      <button onClick={() => { navigate("library") }} className="mt-10 bg-zinc-700 p-3 text-white font-bold text-xl rounded-[4px] hover:bg-zinc-800 transition">Get started</button>
      <img src={gear} className="animatedGear mt-40 mx-auto" />
    </div>
  )
}
