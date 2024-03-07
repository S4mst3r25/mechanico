import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from 'src/Root.jsx'
import 'src/assets/css/input.css'
import 'src/assets/css/main.css'
import { BrowserRouter } from "react-router-dom"
import 'src/translation'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode>,
)
