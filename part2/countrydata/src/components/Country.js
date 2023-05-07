import { useState, useEffect } from "react"
import Weather from "./Weather"
import axios from "axios"

const Country = ({country}) => {
    const city = country.capital[0]
    const apiKey = process.env.REACT_APP_API_KEY

    const [newWeather, setNewWeather] = useState(null)
    useEffect(() => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => {
                setNewWeather(response.data)
            })
    }, [])

    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital[0]} </p>
            <p>population: {country.population} </p>
            <h2>Languages</h2>
            <ul>
                {Object.values(country.languages).map((language) => {
                    return (
                        <li key={language}>{language}</li>
                    )
                })}
            </ul>
            <img src={country.flags.png}></img>
            <Weather city={country.capital[0]} weather={newWeather} />
        </div>
    )
}
export default Country