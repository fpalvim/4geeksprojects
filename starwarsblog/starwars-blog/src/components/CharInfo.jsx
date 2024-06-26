import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { StawWarsContext } from '../context/MyContext'
import axios from "axios"

const CharInfo = () => {
  const [person, setPerson] = useState({})

    const {uid} = useParams()
    const {people} = useContext(StawWarsContext)

    

    useEffect(()=>{
     
    
      async function fetchPeople(){
        const newCharInfo = people.find((person) => person.uid === uid)
        //  if (!newCharInfo) console.log("err");
        console.log(newCharInfo);
        let response = await axios.get(newCharInfo.url)
        const {data} = response
        console.log(data);
        setPerson(data.result)
        console.log(data.result);
        console.log(person);
    }
    fetchPeople()
    },[])


  return (
    <div>
        
        {/* {person ? person.properties.name : "loading"} */}

        
    </div>
      
    
)
}

export default CharInfo
