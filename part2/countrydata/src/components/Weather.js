const Weather = ({city, weather}) => {
    if(weather === null){
        return null
    }
    return (
        <div>
            <p>Weather in {city}:</p>
            <p>Temperature: {weather.main.temp} </p>
            <p>Wind speed: {weather.wind.speed} </p>
        </div>
    )
}

export default Weather