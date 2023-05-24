import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personsService from './services/persons'
import NotificationSuccess from './components/NotificationSuccess'

const App = () => {
  
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')
  const [ errorMessage, setErrorMessage ] = useState(null)

  useEffect(() => {
    personsService.getAll().then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])

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
        if(window.confirm(`Delete ${response.name}?`) === true){
          personsService.remove(event.target.value)
            .then(() => {
              setErrorMessage(`Deleted ${response.name}`)
              setTimeout(() => {
                setErrorMessage(null)
              }, 5000)
            }
            )
            .catch(error => {
              setErrorMessage(`${response.name} has already been removed from the server`)
              setTimeout(() => {
                setErrorMessage(null)
              }, 5000)
            })
        }
      })
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

        setErrorMessage(`Modified ${personObject.name}`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
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

      setErrorMessage(`Added ${personObject.name}`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
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
      <NotificationSuccess message={errorMessage} />
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
