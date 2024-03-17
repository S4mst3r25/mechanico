import { Link, NavLink, Route, Routes } from "react-router-dom"
import logo from 'src/assets/images/mechanico-white.png'
import { Icon } from "@ricons/utils"
import { Info20Filled, BookGlobe20Filled, TextAlignJustify20Filled } from "@ricons/fluent"
import { Github } from "@ricons/fa"
import Home from 'src/routes/Home.jsx'
import About from 'src/routes/About.jsx'
import Library from 'src/routes/Library.jsx'
import Error from 'src/Error.jsx'
import ModelView from "src/routes/ModelView"
import { Suspense, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import "/node_modules/flag-icons/css/flag-icons.min.css"
import useScreenSize from "./hooks/useScreenSize"

export default function Root() {
  const { t, i18n } = useTranslation()
  const [showMenu, setShowMenu] = useState(true)

  const screenSize = useScreenSize()

  useEffect(() => {
    if (screenSize.width <= 640) {
      setShowMenu(false)
    } else {
      setShowMenu(true)
    }
  }, [screenSize.width])

  return (
    <>
      <Suspense fallback={null}>
        <div className="bg-zinc-800 w-full flex items-center h-[73px] pl-6 pr-4 text-zinc-400 justify-between font-bold fixed top-0 z-20">
          <Link to="/"><img src={logo} className="w-[150px] h-max mb-[8px]" /></Link>
          <button onClick={() => setShowMenu(!showMenu)} className="sm:hidden border-2 rounded-md border-zinc-400 hover:bg-zinc-700 hover:border-zinc-200 hover:text-zinc-200">
            <span className="flex items-center justify-center p-2">
              <Icon size="24px">
                <TextAlignJustify20Filled />
              </Icon>
            </span>
          </button>

          {showMenu ?
            <div className={"sm:items-center sm:space-x-5" + (showMenu ? " flex sm:flex-row flex-col absolute sm:relative top-20 sm:top-0 bg-zinc-800 p-4 space-y-4 sm:space-y-0 right-1 sm:right-0 rounded-md" : " hidden")}>
              <NavLink to="/library" className={({ isActive }) => isActive ? "text-zinc-200" : "text-zinc-400 hover:text-zinc-200 transition"}>
                <span className="flex items-center space-x-[1px]">
                  <Icon size="23px">
                    <BookGlobe20Filled />
                  </Icon>
                  <p>{t('libraryButton')}</p>
                </span>
              </NavLink>

              <NavLink to="/about" className={({ isActive }) => isActive ? "text-zinc-200" : "text-zinc-400 hover:text-zinc-200 transition"}>
                <span className="flex items-center space-x-[2px]">
                  <Icon size="23px">
                    <Info20Filled />
                  </Icon>
                  <p>{t('aboutButton')}</p>
                </span>
              </NavLink>

              <a href="https://github.com/S4mst3r25/mechanico" className="hover:text-zinc-200 transition">
                <span className="flex items-center space-x-[4px] mr-8">
                  <Icon size="20px">
                    <Github />
                  </Icon>
                  <p>GitHub</p>
                </span>
              </a>

              <button className="hover:text-zinc-200 hover:bg-zinc-700 px-2 py-1 rounded-md transition cursor-pointer" onClick={() => { i18n.language == 'bg' ? i18n.changeLanguage('en') : i18n.changeLanguage('bg') }}>
                <span className="flex items-center space-x-[3px]">
                  {i18n.language == "bg" ? <span className="fi fi-bg rounded-sm"></span> : <span className="fi fi-gb rounded-sm"></span>}
                  <p>{t('language')}</p>
                </span>
              </button>
            </div> : null}
        </div>
      </Suspense>
      <Routes>
        //TODO: errorElement should be removed. Find root cause.
        <Route path="*" element={<Error />} errorElement={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/library" element={<Library />} />
        <Route path="/library/:id" element={<ModelView />} />
      </Routes>
    </>
  )
}