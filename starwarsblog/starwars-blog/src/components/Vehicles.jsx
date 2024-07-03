import { useContext, useReducer, React, useState, useEffect} from 'react'
import { StarWarsContext } from '../context/MyContext'
import { Link } from 'react-router-dom'
import { GiStarfighter } from "react-icons/gi";


const Vehicles = () => {
const {vehicle, favVehiclesReducer, favoriteVehicles, dispatchVehicles, searchQuery} = useContext(StarWarsContext)
let urlImage = "https://starwars-visualguide.com/assets/img/vehicles/"

function handleAddVehicleFav(myVehicle) {
  dispatchVehicles({
    type: 'added',
    payload: myVehicle,
  });
}

function handleDeleteVehicleFav(myVehicle) {
  dispatchVehicles({
    type: 'deleted',
    payload: myVehicle,
  });
}

function handleVFavVehicle(myVehicle){
  const isFavVehicle = favoriteVehicles.some(i=> i.name === myVehicle.name)
  console.log(isFavVehicle)
  if (isFavVehicle){
    handleDeleteVehicleFav(myVehicle)
  } else 
  {
    handleAddVehicleFav(myVehicle)
  }
}

const filterVehicles = vehicle.filter((i) =>
  i.name.toLowerCase().includes(searchQuery.toLowerCase())
);

  return (
    <div className='card-container'>
      {
        filterVehicles.map((vehicles)=>(
          <div className='cards' key={vehicles.uid}>
            <img src={`${urlImage}${vehicles.uid}.jpg`} />
            <h3>{vehicles.name}</h3>
            <div className='cards-footer'>
              <Link to = {`/vehiclesInfo/${vehicles.uid}`}>
                <button>Learn more!</button>
              </Link>
              <span className='add-to-favorite' type="button" onClick={()=> handleVFavVehicle(vehicles)}><GiStarfighter /></span>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Vehicles