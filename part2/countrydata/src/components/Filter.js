const Filter = ({filterInputHandler}) => {
    return (
        <>
            find countries <input onChange={filterInputHandler}/>
        </>
    )
}

export default Filter