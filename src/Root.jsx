import { Link, NavLink, Route, Routes } from "react-router-dom"
import logo from 'src/assets/images/mechanico-white.png'
import { Icon } from "@ricons/utils"
import { Info20Filled, BookGlobe20Filled } from "@ricons/fluent"
import { Github } from "@ricons/fa"
import Home from 'src/routes/Home.jsx'
import About from 'src/routes/About.jsx'
import Library from 'src/routes/Library.jsx'
import Error from 'src/Error.jsx'
import ModelView from "src/routes/ModelView"
import { Suspense } from "react"
import { useTranslation } from "react-i18next"

export default function Root() {
  const [t, i18n] = useTranslation()

  return (
    <>
      <Suspense fallback={null}>
        <div className="bg-zinc-800 w-full flex items-center p-6 text-zinc-400 justify-between font-bold fixed top-0 z-20">
          <Link to="/"><img src={logo} className="w-[150px] h-max" /></Link>
          <div className="space-x-4 flex">

            <NavLink to="/library" className={({ isActive }) => isActive ? "text-zinc-200" : "text-zinc-400 hover:text-zinc-200 transition"}>
              <span className="flex items-center">
                <Icon size="20px">
                  <BookGlobe20Filled />
                </Icon>
                <p>{t('libraryButton')}</p>
              </span>
            </NavLink>

            <NavLink to="/about" className={({ isActive }) => isActive ? "text-zinc-200" : "text-zinc-400 hover:text-zinc-200 transition"}>
              <span className="flex items-center space-x-[1px]">
                <Icon size="20px">
                  <Info20Filled />
                </Icon>
                <p>{t('aboutButton')}</p>
              </span>
            </NavLink>

            <a href="https://github.com/S4mst3r25/mechanico" className="hover:text-zinc-200 transition">
              <span className="flex items-center space-x-[3px]">
                <Icon size="20px">
                  <Github />
                </Icon>
                <p>GitHub</p>
              </span>
            </a>

            <a className="hover:text-zinc-200 transition cursor-pointer" onClick={() => { i18n.language == 'bg' ? i18n.changeLanguage('en') : i18n.changeLanguage('bg') }}>
              <span className="flex items-center space-x-[3px]">
                <Icon size="20px">
                  <Github />
                </Icon>
                <p>{t('translateTo')}</p>
              </span>
            </a>

          </div>
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