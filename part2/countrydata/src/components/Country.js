import Weather from "./Weather"

const Country = ({country}) => {

    const capital = country.capital[0]

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
            <Weather city={country.capital[0]} />
        </div>
    )
}
export default Country