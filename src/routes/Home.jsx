import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="text-center mt-60">
      <h1 className="font-bold text-4xl mb-4">Welcome to Mechanico!</h1>
      <p className="font-bold text-xl mb-4">A library of interactive 3D mechanisms.</p>
      <button onClick={() => { navigate("library") }} className="bg-zinc-700 p-2 rounded-md text-white font-bold hover:bg-zinc-800 transition">Get started</button>
    </div>
  )
}
