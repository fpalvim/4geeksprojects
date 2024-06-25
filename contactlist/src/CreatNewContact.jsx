import React, { useState } from 'react'

const CreatNewContact = ({addContact}) => {
  
    const [newName, setNewName] = useState("")
    const [newPhone, setNewPhone] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [newAddress, setNewAddress] = useState("")

    const handleNewData = (e) => {
        e.preventDefault()
        console.log(newName, newPhone, newEmail, newAddress);
        addContact(newName, newPhone, newEmail, newAddress)
        setNewName("")
        setNewPhone("")
        setNewEmail("")
        setNewAddress("")
    }
  
    return (
    <div>
        <form onSubmit={handleNewData}>
            <input type="text" value={newName} placeholder='Type here the name:' onChange={((e) => setNewName(e.target.value))}/>
            <input type="number" value={newPhone} placeholder='Type here the phonenumber' onChange={((e) => setNewPhone(e.target.value))}/>
            <input type="email" value={newEmail} placeholder='Type here the email' onChange={((e) => setNewEmail(e.target.value))}/>
            <input type="text" value={newAddress} placeholder='Type here the address' onChange={((e) => setNewAddress(e.target.value))}/>
            <button type='submit'>Add contact</button>
        </form>
    </div>
  )
}

export default CreatNewContact