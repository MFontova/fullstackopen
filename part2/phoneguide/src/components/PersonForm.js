const PersonForm = ({addPerson, inputNameHandler, inputNumberHandler}) => {
    return(
        <form onSubmit={addPerson}>
        <div>
          <p>name: <input onChange={inputNameHandler} /></p>
          <p>number: <input onChange={inputNumberHandler} /></p>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm