import React, { useState } from 'react'
import './App.css'
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'

function App() {
  const [contacts, setContacts] = useState([])
  // intially will be an empty array

  // const contacts = [
  //   {
  //     id: '1',
  //     name: 'Ragulan',
  //     email: 'ragulancodes@gmail.com',
  //   },
  //   {
  //     id: '2',
  //     name: 'Ricky',
  //     email: 'rickycodes@gmail.com',
  //   },
  // ]

  return (
    <div className='ui container'>
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
      {/* passing contacts array to contact component */}
    </div>
  )
}

export default App
