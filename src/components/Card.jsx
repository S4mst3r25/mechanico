export default function Card({ img, name }) {
    return (
        <>
            <div className="shadow-md shadow-gray-500 w-72 border-[1px] border-zinc-800 cursor-pointer  hover:shadow-gray-700 hover:opacity-80 transition group">
                <button class="translatebtn hidden group-hover:block absolute bg-zinc-500 text-white p-2 font-bold transition-opacity">View model</button>
                <img className="w-full" src={ img }/>
                <div className="p-3 h-20 bg-zinc-800">
                    <p className="text-lg font-bold line-clamp-2 text-white">{ name }</p>
                </div>
            </div>
        </>
    )
}