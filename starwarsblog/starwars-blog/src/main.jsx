import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Characters from './components/Characters.jsx'
import Vehicles from './components/Vehicles.jsx'
import Planets from './components/Planets.jsx'
import Home from './components/Home.jsx'
import { StarWarsProvider } from './context/MyContext.jsx'
import CharInfo from './components/CharInfo.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StarWarsProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<App/>}>
          <Route path='/' element={<Home />} />
          <Route path='characters/' element={<Characters />} />
          <Route path='charInfo/:uid' element={<CharInfo />} />
          <Route path='vehicles/:uid' element={<Vehicles />} />
          <Route path='planets/:uid' element={<Planets />} />
          {/* <Route path='search' element={<Search />} /> */}
        </Route>    
      </Routes>
    </BrowserRouter>
    </StarWarsProvider>
  </React.StrictMode>,
)
