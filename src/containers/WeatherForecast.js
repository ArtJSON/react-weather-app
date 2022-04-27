import React, { Component } from "react";
import WeatherForm from "../components/WeatherForm";
import WeatherDay from "../components/WeatherDay";
import axios from "axios";
import res from "../components/test.js";
import WeatherDetails from "../components/WeatherDetails";

class WeatherForecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      currentWeather: {},
      weather: [],
      units: "metric", //"us"
    };

    this.setLocation = this.setLocation.bind(this);
    this.setWeather = this.setWeather.bind(this);
  }

  async componentDidMount() {
    let locRes = await axios.get("https://ipapi.co/json/");

    let loc = `${locRes.data.country_name}, ${locRes.data.city}`;

    this.setState({ location: loc });

    this.setWeather();
  }

  setLocation(loc) {
    this.setState({ location: loc });
  }

  async setWeather() {
    const loc = this.state.location;

    console.log(res);

    let weathRes = res;
    // await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc}?unitGroup=${this.state.units}&include=days%2Ccurrent&key=${process.env.REACT_APP_WEATHER_API_KEY}&contentType=json`);

    this.setState({
      weather: weathRes.data.days,
      currentWeather: weathRes.data.currentConditions,
    });
  }

  render() {
    return (
      <div className="weather-forecast">
        <WeatherForm handleLocation={this.setLocation} />
        <h1>Forecast for {this.state.location}</h1>
        <div className="weather-details-container">
          <WeatherDetails
            weatherData={this.state.currentWeather}
            units={this.state.units === "metric" ? "°C" : "°F"}
          />
        </div>
        <div className="weather-days">
          {this.state.weather.map((d) => (
            <WeatherDay
              weatherData={d}
              units={this.state.units === "metric" ? "°C" : "°F"}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default WeatherForecast;
