import { useState, useEffect } from "react"
import axios from "axios"
import Filter from "./components/Filter"
import CountriesList from "./components/CountriesList"

function App() {
  const [newFilter, setNewFilter] = useState('')
  const [newCountries, setNewCountries] = useState([])
  const [newWeather, setNewWeather] = useState([])
  
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setNewCountries(response.data)
      })
  }, [])

  function filterCountries(arr, query) {
    return arr.filter((el) => el.name.common.toLowerCase().includes(query.toLowerCase()));
  }

  const filterInputHandler = (event) => {
    setNewFilter(event.target.value)
  }

  const viewClickHandle = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <Filter filterInputHandler={filterInputHandler} />
      <CountriesList viewClickHandle={viewClickHandle} countries={filterCountries(newCountries, newFilter) } />
    </div>
  );
}

export default App;
