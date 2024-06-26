import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Characters from "./components/Characters.jsx";
import Vehicles from "./components/Vehicles.jsx";
import Planets from "./components/Planets.jsx";
import Home from "./components/Home.jsx";
import CharInfo from "./components/CharInfo.jsx";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="characters/" element={<Characters />} />
        <Route path="charInfo/:uid" element={<CharInfo />} />
        <Route path="vehicles/:uid" element={<Vehicles />} />
        <Route path="planets/:uid" element={<Planets />} />
        {/* <Route path='search' element={<Search />} /> */}
      </Routes>
    </div>
  );
}

export default App;
