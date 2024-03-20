import Card from 'src/components/Card.jsx'
import differential from 'src/assets/images/thumbnails/differential.png'
import engine from 'src/assets/images/thumbnails/engine.png'
import rootsblower from 'src/assets/images/thumbnails/rootsblower.png'
import wankel from 'src/assets/images/thumbnails/wankel.png'
import gripper from 'src/assets/images/thumbnails/gripper.png'
import suspension from 'src/assets/images/thumbnails/suspension.png'
import { useTranslation } from 'react-i18next'
import { Suspense, useEffect, useState } from 'react'
import { Icon } from '@ricons/utils'
import { Search20Filled } from '@ricons/fluent'

function LoadingScreen() {
    return (
        <>
            <h1 className="text-2xl text-center mt-32">Loading...</h1>
        </>
    )
}

function SearchBar({ searchList, filteredList }) {
    const [searchInput, setSearchInput] = useState("")
    const { t } = useTranslation()

    const searchLibrary = (searchText, searchList) => {
        if (searchText === "") {
            filteredList(searchList)
            return
        }

        const searchResults = searchList.filter((model) => t(model.name).toLowerCase().includes(searchText.toLowerCase()))

        //Pass search results to parent via filteredList prop
        filteredList(searchResults)
    }

    return (
        <>
            <div className="w-max flex">
                <input value={searchInput} onChange={e => setSearchInput(e.target.value)} type="text" placeholder={t('search.placeholder')} className="border border-r-0 border-zinc-500 h-[52px] px-4 rounded-bl-md rounded-tl-md w-80"></input>
                
                <button onClick={() => { searchLibrary(searchInput, searchList) }} className="bg-zinc-800 rounded-br-md rounded-tr-md px-3 hover:bg-zinc-700 transition group">
                    <span className="flex items-center">
                        <Icon size="26px">
                            <Search20Filled className="text-zinc-400 group-hover:text-zinc-200 transition" />
                        </Icon>
                    </span>
                </button>
                
                <button onClick={ () => {filteredList(searchList); setSearchInput("")}} className=' ml-1 text-zinc-400 hover:text-zinc-200 bg-zinc-800 rounded-md px-3 hover:bg-zinc-700 transition'>{t('search.clear')}</button>
            </div>
        </>
    )
}

export default function Library() {
    const { t, i18n } = useTranslation()
    const [resultMessage, setResultMessage] = useState("")

    const fullModelList = [
        {
            img: differential,
            name: "library.models.diff",
            modelId: "differential"
        },
        {
            img: engine,
            name: "library.models.engine",
            modelId: "engine"
        },
        {
            img: rootsblower,
            name: "library.models.blower",
            modelId: "rootsblower"
        }, {
            img: wankel,
            name: "library.models.wankel",
            modelId: "wankelengine"
        }, {
            img: gripper,
            name: "library.models.robo-arm",
            modelId: "roboticgripper"
        }, {
            img: suspension,
            name: "library.models.suspension",
            modelId: "doublewishbonesuspension"
        }
    ]


    const [filteredModelList, setFilteredModelList] = useState([...fullModelList])
    let resultCount = filteredModelList.length

    const [Cards, setCards] = useState([
        fullModelList.map((model) => {
            return (
                <>
                    <Card key={model.modelId} img={model.img} name={t(model.name)} modelId={model.modelId} />
                </>
            )
        })
    ])

    useEffect(() => {
        resultCount = filteredModelList.length
        switch (resultCount) {
            case 0: setResultMessage('search.results.noResults'); break
            case 1: setResultMessage('search.results.singleResult'); break
            case fullModelList.length: setResultMessage('full'); break
            default: setResultMessage('search.results.multiResult')
        }
    }, [filteredModelList])

    //Re-render cards when filtered list updates
    useEffect(() => {
        setCards([
            filteredModelList.map((model) => {
                return (
                    <>
                        <Card key={model.modelId} img={model.img} name={t(model.name)} modelId={model.modelId} />
                    </>
                )
            })
        ])
    }, [filteredModelList])

    //Re-render cards when language changes
    i18n.on("languageChanged", () => {
        setCards([
            filteredModelList.map((model) => {
                return (
                    <>
                        <Card key={model.modelId} img={model.img} name={t(model.name)} modelId={model.modelId} />
                    </>
                )
            })
        ])
    })

    //Get filtered list from SearchBar (child --> parent)
    const setNewFilteredList = (filteredList) => {
        setFilteredModelList(filteredList)
    }

    return (
        <>
            <h1 className="font-bold text-3xl mt-36 text-center">{t('library.title')}</h1>
            <div className="flex justify-center mt-10">
                <SearchBar searchList={fullModelList} filteredList={setNewFilteredList} />

            </div>
            <Suspense fallback={<LoadingScreen />}>
                <div className="m-auto">
                    <h1 className='text-center mt-8 text-xl text-zinc-500'>{resultMessage == 'full' ? <></> : (resultCount > 1 ? resultCount + " " +  t(resultMessage) : t(resultMessage))}</h1>
                    <div className="flex flex-wrap mt-16 gap-4 justify-center mb-14">
                        {Cards}
                    </div>
                </div>
            </Suspense>
        </>
    )
}