export default function Card({ img, name }) {
    return (
        <>
            <div className="shadow-md shadow-gray-500 w-72 border-[1px] border-zinc-800">
                <img className="w-full" src={ img }/>
                <div className="p-3 h-20 bg-zinc-800">
                    <p className="text-lg font-bold line-clamp-2 text-white">{ name }</p>
                </div>
            </div>
        </>
    )
}