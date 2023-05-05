import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '666555444' },
    { name: 'Marc Fontova', number: '666333999' },
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')

  const inputNameHandler = (event) =>{
    const input = event.target.value
    setNewName(input)
  }

  const inputNumberHandler = (event) =>{
    const input = event.target.value
    setNewNumber(input)
  }

  const nameInPersons = persons.some(function(element) {
    return element.name === newName
  })

  const addPerson = (event) =>{
    event.preventDefault()
    
    if(nameInPersons){
      console.log('El nombre existe')
      alert(`${newName} is already added to phonebook`)
    }else{
      console.log('El nombre no existe')
      const personObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(personObject))
      setNewName('')
    }
  }

  const searchInputHandler = (event) => {
    console.log(event.target.value)
    setNewSearch(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={searchInputHandler} />
      <h2>Add a new</h2>
      <PersonForm addPerson={addPerson} inputNameHandler={inputNameHandler} inputNumberHandler={inputNumberHandler} />
      {/* <form onSubmit={addPerson}>
        <div>
          <p>name: <input onChange={inputNameHandler} /></p>
          <p>number: <input onChange={inputNumberHandler} /></p>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form> */}
      <h2>Numbers</h2>
      <div>
        <Persons personsList={persons.filter(element => element.name.toLowerCase().includes(newSearch.toLowerCase()))} />
        {/* {persons.filter(element => element.name.toLowerCase().includes(newSearch.toLowerCase()))
        .map(person => <p key={person.name}>{person.name}: {person.number}</p>)} */}
      </div>
    </div>
  )
}

export default App
