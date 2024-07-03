import { useContext, useReducer, React, useState, useEffect} from 'react'
import { StarWarsContext } from '../context/MyContext'
import { Link } from 'react-router-dom'
import { GiLightSabers } from "react-icons/gi";


const Characters = () => {
const {people, favorites, dispatch, searchQuery} = useContext(StarWarsContext)
let urlImage = "https://starwars-visualguide.com/assets/img/characters/"

function handleAddFav(characters) {
  dispatch({
    type: 'added',
    payload: characters,
  });
}

function handleDeleteFav(characters) {
  dispatch({
    type: 'deleted',
    payload: characters,
  });
}

function handleVFav(characters){
  const isFav = favorites.some(i=> i.name === characters.name)
  console.log(isFav)
  if (isFav){
    handleDeleteFav(characters)
  } else 
  {
    handleAddFav(characters)
    
  }
}
// console.log(favorites);

const filterPeople = people.filter((person) =>
  person.name.toLowerCase().includes(searchQuery.toLowerCase())
);

return (
  <div className='card-container'>
    {
      filterPeople.map((chars)=>(
        <div className='cards' key={chars.uid}>
          <img src={`${urlImage}${chars.uid}.jpg`} />
          <h3>{chars.name}</h3>
          <div className='cards-footer'>
            <Link to = {`/charInfo/${chars.uid}`}>
              <button>Learn more!</button>
            </Link>
            <span className='add-to-favorite' type="button" onClick={()=> handleVFav(chars)}><GiLightSabers /></span>
          </div>
        </div>
      ))
    }
  </div>
)

}

export default Characters