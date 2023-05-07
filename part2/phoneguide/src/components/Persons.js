import Person from "./Person"

const Persons = ({personsList, deleteButtonHandler}) =>{
    return (
        personsList.map(person => <Person deleteButtonHandler={deleteButtonHandler} key={person.name} person={person} />)
    )
}

export default Persons