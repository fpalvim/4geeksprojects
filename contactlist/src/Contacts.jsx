import React from 'react'

const Contacts = ({contact}) => {
  return (
    <div className='listofcontacts'>
         <li>{contact.name}</li>
         <li>{contact.phone}</li>
         <li>{contact.email}</li>
         <li>{contact.address}</li>
    </div>
  )
}

export default Contacts