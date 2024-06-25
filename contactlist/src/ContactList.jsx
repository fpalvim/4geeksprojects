import React, { useEffect, useState } from 'react'
import axios from "axios";
import Contacts from './Contacts';
import CreatNewContact from './CreatNewContact';

let URI = ("https://playground.4geeks.com/contact/agendas/felipealvim/contacts")

const ContactList = () => {
  
    const [contacts, setContacts] = useState([])
  
    useEffect (()=>{
        async function fetchData (){
            let response = await axios.get(URI)
            const {data} = response
            setContacts(data.contacts)
            console.log(data.contacts);
        }
        fetchData()
    },[])

    const addContact = (name, phone, email, address) => {
        let newContacts = [...contacts, {
                "name": name,
                "phone": phone,
                "email": email,
                "address": address
            }]

            axios.post("https://playground.4geeks.com/contact/agendas/felipealvim/contacts", {
                "name": name,
                "phone": phone,
                "email": email,
                "address": address
            })
              .then(function (response) {
                setContacts(newContacts)
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
    }

    return (
    <div>
        <div>
            <h1>Contact List</h1>
        </div>
        <div>
            <CreatNewContact key={contacts.id} addContact={addContact} />
        </div>
        <ul>
           {contacts.map((contact)=>(
              <Contacts contact={contact}/>
            ))}
        </ul>
    </div>
  )
}

export default ContactList