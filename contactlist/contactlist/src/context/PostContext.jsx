import { createContext, useContext, useEffect, useState } from "react";
import React from 'react'
import axios from "axios"


let URL = ("https://playground.4geeks.com/contact/agendas/felipealvim")

export const ListContext = createContext()

export const ListProvider = ({children}) => {
  const [contactList, setContactList] = useState([])
  
  useEffect(()=>{
    
    async function fetchData (){
        let response = await axios.get("https://playground.4geeks.com/contact/agendas/felipealvim")
        const {data} = response
        setContactList(data.contacts)
        console.log(data.contacts);
    }
    fetchData()
    
},[]) 

const addContact = (name, phone, email, address) => {
  const newContacts = [...contactList,
    {
      "name": name,
      "phone": phone,
      "email": email,
      "address": address
    }]

    axios.post("https://playground.4geeks.com/contact/agendas/felipealvim/contacts",   {
      "name": name,
      "phone": phone,
      "email": email,
      "address": address
    })
    .then(function (response) {
      setContactList(newContacts)
      console.log(response);
      window.location.reload()
    })
    .catch(function (error) {
      console.log(error);
    });
  

}

const updateContact = async(id, editContact) => {
  axios.put(`https://playground.4geeks.com/contact/agendas/felipealvim/contacts/${id}`, editContact)
  .then(response => {
    const editContacts = contactList.map(contact => 
      contact.id === id ? response.data : contact
    )
    setContactList(editContacts)
    window.location.reload()
    .catch(error => console.error(error))
  })
}
  




const deleteContact = async (id) => {
  const newContacts = [...contactList]
  const filteredContacts = newContacts.filter(contact => contact.id !== id ? contact : null)
  setContactList(filteredContacts)

  const response = await axios.delete(`https://playground.4geeks.com/contact/agendas/felipealvim/contacts/${id}`)
  window.location.reload()
  return response.data
}

return (
    
  <ListContext.Provider value={{contactList, addContact, updateContact, deleteContact}}>
    {children}
  </ListContext.Provider>
)

}


// export const useContextList = () => useContext(ListContext)