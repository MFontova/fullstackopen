import Person from "./Person"

const Persons = ({personsList}) =>{
    return (
        personsList.map(person => <Person key={person.name} person={person} />)
    )
}

export default Persons