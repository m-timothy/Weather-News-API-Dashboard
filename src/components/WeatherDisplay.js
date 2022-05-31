import {useEffect, useState} from "react";

const WeatherDisplay = () => {


    const [weather, setWeather] = useState(null)
    useEffect(() => {

        const axios = require("axios")

        const options = {
            method: 'GET',
            url: "https://api.openweathermap.org/data/2.5/onecall",
            params: {
                lat: "30.4171",
                lon: "-97.929",
                units: "imperial",
                appid: process.env.REACT_APP_OPENWEATHERMAP_API_KEY
            }
        }

        axios.request(options).then(function (response) {
            console.log("here comes the weather data")
            console.log(response.data)
            setWeather(response.data)
            console.log("here comes the weather")
            console.log(weather)
        }).catch(function (error) {
            console.error(error);
        })

    }, [])

    console.log("here comes the weather")
    console.log(weather)

    return (
        <div className={"weather-display"}>

            <div>
                <h1>{Math.round(weather?.current.temp)}˚{weather?.current.weather[0].main}.</h1>
            </div>
            <div>
                <p>Feels like: {Math.round(weather?.current.feels_like)}˚ Low: {Math.round(weather?.daily[0].temp.min)}˚ High: {Math.round(weather?.daily[0].temp.max)}˚</p>
            </div>
            <div>
                Humidity {weather?.current.humidity}

            </div>

        </div>
    )


}

export default WeatherDisplay