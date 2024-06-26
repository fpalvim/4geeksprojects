import { useEffect, useState, createContext } from "react";
import axios from "axios"
import { useParams } from "react-router-dom";

let url = "https://www.swapi.tech/api/people"

export const StawWarsContext = createContext()

export const StarWarsProvider = ({children}) => {
    
    const [people, setPeople] = useState([])

    useEffect(()=>{

        async function fetchPeople(){
            let response = await axios.get(url)
            const {data} = response
            setPeople(data.results)
            console.log(data.results);
            
        }
        fetchPeople()
    },[url])

    const charUrlInfo = () => {
       const {uid} = useParams() 
       const [char, setChar] = useState([])

       const getChar = async(url) => {
            const response = await axios.get(url)
            const data = response
            setChar(data)
        }
       
        useEffect(()=>{
            const charUrl = `${url}/${uid}`
            getChar(charUrl)
         },[])
    }

    return (
        <StawWarsContext.Provider value={{people,charUrlInfo}} >
            {children}
        </StawWarsContext.Provider>
    )

}
