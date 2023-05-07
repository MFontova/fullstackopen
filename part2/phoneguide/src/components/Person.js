const Person = ({person, deleteButtonHandler}) => {
    return(
        <div>
            <p key={person.name}>{person.name}: {person.number}</p>
            <button key={person.id} value={person.id} onClick={deleteButtonHandler}>Delete</button>
        </div>
    )
}

export default Person