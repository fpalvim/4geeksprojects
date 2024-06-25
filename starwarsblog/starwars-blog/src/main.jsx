import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Characters from './components/Characters.jsx'
import Vehicles from './components/Vehicles.jsx'
import Planets from './components/Planets.jsx'
import Home from './components/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App/>}>
          <Route path='/' element={<Home />} />
          <Route path='characters/:uid' element={<Characters />} />
          <Route path='vehicles/:uid' element={<Vehicles />} />
          <Route path='planets/:uid' element={<Planets />} />
          {/* <Route path='search' element={<Search />} /> */}
        </Route>    
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
