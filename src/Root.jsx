import { Link, Route, Routes } from "react-router-dom"
import logo from 'src/assets/images/mechanico-white.png'
import { Icon } from "@ricons/utils"
import { Info20Filled, BookGlobe20Filled } from "@ricons/fluent"
import Home from 'src/routes/Home.jsx'
import About from 'src/routes/About.jsx'
import Library from 'src/routes/Library.jsx'
import Error from 'src/Error.jsx'
import ModelView from "src/routes/ModelView"

export default function Root() {
  return (
    <>
      <div className="bg-zinc-800 w-full flex items-center p-6 text-zinc-400 justify-between font-bold fixed top-0 z-20">
        <Link to="/"><img src={logo} className="w-[150px] h-max" /></Link>
        <div className="space-x-3 flex">

          <Link to="/library" className="hover:text-zinc-200 transition">
            <span className="flex items-center">
              <Icon size="20px">
                <BookGlobe20Filled />
              </Icon>
              <p>Library</p>
            </span>
          </Link>

          <Link to="/about" className="hover:text-zinc-200 transition">
            <span className="flex items-center">
              <Icon size="20px">
                <Info20Filled />
              </Icon>
              <p>About</p>
            </span>
          </Link>
          
        </div>
      </div>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/library" element={<Library />} />
        <Route path="/library/:id" element={<ModelView />} />
      </Routes>
    </>
  )
}