import React, { useContext } from 'react'
import { ListContext } from '../context/PostContext'
import Inputs from '../components/Inputs'


export const ContactList = () => { 

    const {contactList} = useContext(ListContext)
    
  return (
    <div className='container-list'>
    <h1>Contact List</h1>
        <div>
            <Inputs/>
        </div>
        <div className='cards'>
              {contactList.map(contact =>(
                <ul className='card' key={contact.id}> 
                <img src="https://picsum.photos/150" alt="" />
                  <li><span>Name: </span>{contact.name}</li>
                  <li><span>Phone: </span>{contact.phone}</li>
                  <li><span>e-mail: </span>{contact.email}</li>
                  <li><span>Contact: </span>{contact.address}</li>
                </ul>
              ))}
              
        </div>
    </div>
  )

}
