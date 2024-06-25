import React, { useContext, useState } from 'react'
import { ListContext } from '../context/PostContext'


const Inputs = () => {
  const {contactList, addContact, updateContact, deleteContact} = useContext(ListContext)

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("") 
  const [selectedId, setSelectedId] = useState("") 
  

  const resetFields = () => {
    setName("")
    setPhone("")
    setEmail("")
    setAddress("")
    setSelectedId("")
  }

  const handleAdd = () => {
    if (!name || !phone || !email || !address) return
    addContact(name, phone, email, address)
    resetFields()
  }

  const handleEdit = () => {
    if (selectedId) {
      if (!name || !phone || !email || !address) return
      {
      updateContact(selectedId, ({name,phone,email,address}))
      alert("Contact updated successfully!")
      resetFields() 
      }
    } else {
      alert("Please select a contact to edit")
    }
  }


  const handleDelete = () => {
    if (selectedId) {
      const imSure = window.confirm("Are you sure you want to do this?")
      if (imSure) {
      deleteContact(selectedId)
      resetFields()
      alert("Contact deleted succsessfully!")
      }
    } else {
      alert("Select a contact to delete")
    }
  }
  
  return (
    <>
        <div className='inputFields'>
          <form>
            <div>
            <input type="text" value={name} placeholder='Type the name here' onChange={(e)=> setName(e.target.value)}/>
            <input type="number" value={phone} placeholder='Type the phone here'onChange={(e)=> setPhone(e.target.value)}/>
            <input type="email" value={email} pattern=".+@foo.com" placeholder='Type the email here'onChange={(e)=> setEmail(e.target.value)}/>
            <input type="text" value={address} placeholder='Type the address here' onChange={(e)=> setAddress(e.target.value)}/>
            </div>
            <div>
            <select value={selectedId} onChange={(e)=> setSelectedId(e.target.value)}>
              <option value="">Select contact</option>
              {contactList.map((contact) => (
                <option key={contact.id} value={contact.id}>
                {contact.name}
                </option>
              ))}
            </select>
            </div>
          </form>
        </div>
        <div className='buttons'>
            <button onClick={handleAdd}>Add a contact</button>
            <button onClick={handleEdit}>Edit a contact</button>
            <button onClick={handleDelete}>Delete a contact</button>
        </div>
    </>
  )
}

export default Inputs