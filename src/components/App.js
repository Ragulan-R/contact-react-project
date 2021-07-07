import React, { useState, useEffect } from 'react'
import { uuid } from 'uuidv4'
import './App.css'
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'

function App() {
  const [contacts, setContacts] = useState([])
  const LOCAL_STORAGE_KEY = 'contacts'
  // intially will be an empty array

  // TO ADD CONTACTS
  const addContactHandler = (contact) => {
    console.log(contact)
    setContacts([...contacts, { id: uuid(), ...contact }])
    // the existing contacts plus and new contacts
  }

  // TO DELETE CONTACTS
  const removeContactHandler = (id) => {
    // create a copy a list of the contacts
    const newContactList = contact.filter((contact) => {
      return contact.id !== id
    })
    setContacts(newContactList)
  }

  // TO RETREIVE
  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    //  you need a key for local storage
    if (retrieveContacts) setContacts(retrieveContacts)
    // setContacts(retreiveContacts)
  }, [])

  // TO STORE
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
    //  you need a key for local storage
  }, [contacts])

  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      {/* passing child to parent */}
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
      {/* passing contacts array to contact component */}
    </div>
  )
}

export default App
