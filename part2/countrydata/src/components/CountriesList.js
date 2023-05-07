import Country from "./Country"

const CountriesList = ({countries, viewClickHandle}) => {
    if(countries.length === 1){
        return(
            <Country country={countries[0]} />
        )
    }else if(countries.length <= 10){
        return (
            countries.map(country => <p key={country.name.common} >{country.name.common} <button value={country.name.common} onClick={viewClickHandle}>view</button> </p>)
        )
    }else if(countries.length > 10){
        return(
            <p>Too many matches, specify another filter</p>
        )
    }
}

export default CountriesList