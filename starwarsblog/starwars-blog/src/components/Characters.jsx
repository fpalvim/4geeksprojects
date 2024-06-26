import React from 'react'
import { useContext } from 'react'
import { StawWarsContext } from '../context/MyContext'
import { Link } from 'react-router-dom'


const Characters = () => {
const {people} = useContext(StawWarsContext)
let urlImage = "https://starwars-visualguide.com/assets/img/characters/"

  return (
    <div className='char-card-container'>
      {
        people.map((chars)=>(
          <div className='cards' key={chars.uid}>
            <img src={`${urlImage}${chars.uid}.jpg`} />
            <h3>{chars.name}</h3>
            <Link to = {`/charInfo/${chars.uid}`}>
              <button src={chars.url}>Learn more!</button>
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default Characters