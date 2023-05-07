import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'
import personsService from './services/persons'

const App = () => {
  
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')

  useEffect(() => {
    personsService.getAll().then(initialPersons => {
      setPersons(initialPersons)
    })
  })

  const inputNameHandler = (event) =>{
    const input = event.target.value
    setNewName(input)
  }

  const inputNumberHandler = (event) =>{
    const input = event.target.value
    setNewNumber(input)
  }

  const deleteButtonHandler = (event) => {
    console.log('Removing element: ', event.target.value)
    personsService.getById(event.target.value)
      .then(response => {
        console.log(response)
        if(window.confirm(`Delete ${response.name}?`)){
          personsService.remove(event.target.value)
        }
      })

    // if(confirm('Delete'))
    // personsService.remove(event.target.value)
  }

  const nameInPersons = persons.some(function(element) {
    return element.name === newName
  })

  const addPerson = (event) =>{
    event.preventDefault()
    
    if(nameInPersons){
      console.log('El nombre existe')
      if(window.confirm(`${newName} is already added to phonebook, replace old number with new one?`)){
        const personObject = {
          name: newName,
          number: newNumber
        }

        const oldPerson = persons.filter(person => person.name == newName )
        
        personsService.update(oldPerson[0].id,personObject)
      }
    }else{
      console.log('El nombre no existe')
      const personObject = {
        name: newName,
        number: newNumber
      }
      personsService.create(personObject)
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
      <h2>Numbers</h2>
      <div>
        <Persons deleteButtonHandler={deleteButtonHandler} personsList={persons.filter(element => element.name.toLowerCase().includes(newSearch.toLowerCase()))} />
      </div>
    </div>
  )
}

export default App
