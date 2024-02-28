import { useNavigate } from 'react-router-dom';

export default function Card({ img, name, modelId }) {
    const navigate = useNavigate()
    const navigateToModelPage = () => {
      navigate('/library/' + modelId)
    }
    return (
        <>
            <div onClick={navigateToModelPage} className="flex flex-col items-center shadow-md shadow-gray-500 w-72 max-h-[300px] border-[1px] border-zinc-800 cursor-pointer  hover:shadow-gray-700 hover:opacity-80 transition group">
                <button className="mt-[110px] hidden group-hover:block absolute bg-zinc-500 text-white p-2 font-bold transition-opacity">View model</button>
                <img className="h-[218px]" src={ img }/>
                <div className="p-3 h-20 bg-zinc-800 w-full">
                    <p className="text-lg font-bold line-clamp-2 text-white">{ name }</p>
                </div>
            </div>
        </>
    )
}