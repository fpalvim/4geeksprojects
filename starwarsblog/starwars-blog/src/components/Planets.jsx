import { useContext, useReducer, React, useState, useEffect} from 'react'
import { StarWarsContext } from '../context/MyContext'
import { Link } from 'react-router-dom'
import { IoPlanetOutline } from "react-icons/io5";


const Planets = () => {
const {planet, favoritePlanets, dispatchPlanets, searchQuery} = useContext(StarWarsContext)
let urlImage = "https://starwars-visualguide.com/assets/img/planets/"

function handleAddPlanetFav(thisPlanet) {
  dispatchPlanets({
    type: 'added',
    payload: thisPlanet,
  });
}

function handleDeletePlanetFav(thisPlanet) {
  dispatchPlanets({
    type: 'deleted',
    payload: thisPlanet,
  });
}

function handleFavPlanets(thisPlanet){
  const isFavPlanet = favoritePlanets.some(planet=> planet.name === thisPlanet.name)
  console.log(isFavPlanet);
  if (isFavPlanet){
    handleDeletePlanetFav(thisPlanet)
  } else 
  {
    handleAddPlanetFav(thisPlanet)
  }
console.log(favoritePlanets);
}

const filterPlanets = planet.filter((i) =>
  i.name.toLowerCase().includes(searchQuery.toLowerCase())
);

  return (
    <div className='card-container'>
      {
        filterPlanets.map((planets)=>(
          <div className='cards' key={planets.uid}>
            <img src={`${urlImage}${planets.uid}.jpg`} />
            <h3>{planets.name}</h3>
            <div className='cards-footer'>
              <Link to = {`/planetsInfo/${planets.uid}`}>
                <button>Learn more!</button>
              </Link>
              <span onClick={()=> handleFavPlanets(planets)} className='add-to-favorite' type="button" ><IoPlanetOutline /></span>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Planets