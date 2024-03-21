import { useNavigate } from "react-router-dom"

export default function Error() {
    const navigate = useNavigate()

    return (
        <>
            <div className="flex items-center flex-col mt-40">
                <h2 className="font-bold text-4xl mt-10 text-zinc-500">Not found</h2>
                <button onClick={() => { navigate(-1) }} className="mt-10 p-3 text-zinc-100 rounded-lg text-zinc-700 font-bold bg-zinc-700 hover:bg-zinc-800 hover:text-white transition">Go back</button>
            </div>
        </>
    )
}