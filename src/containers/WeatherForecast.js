import React, { Component } from "react";
import WeatherForm from "../components/WeatherForm";
import WeatherDay from "../components/WeatherDay";
import axios from "axios";
import res from "../components/test.js";
import WeatherDetails from "../components/WeatherDetails";
import WeatherMoreDetails from "../components/WeatherMoreDetails";
import "./WeatherForecast.css";

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
    console.log("dasdasdasdas");

    let loc = `${locRes.data.country_name}, ${locRes.data.city}`;

    this.setState({ location: loc });

    this.setWeather();
  }

  async setLocation(loc) {
    await this.setState({ location: loc });
    await this.setWeather();
  }

  async setWeather() {
    const loc = this.state.location;

    if (loc !== "") {
      let weathRes = await axios.get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc}?unitGroup=${this.state.units}&include=days%2Ccurrent&key=${process.env.REACT_APP_WEATHER_API_KEY}&contentType=json`
      );

      this.setState({
        weather: weathRes.data.days,
        currentWeather: weathRes.data.currentConditions,
        location: weathRes.data.resolvedAddress,
      });
    }
  }

  render() {
    let maxAll = Math.max(...this.state.weather.map((d) => d.tempmax));
    let minAll = Math.min(...this.state.weather.map((d) => d.tempmin));

    return this.state.weather.length ? (
      <div className="weather-forecast">
        <div className="weather-details-container">
          <WeatherForm handleLocation={this.setLocation} />
          <WeatherDetails
            location={this.state.location}
            weatherData={this.state.currentWeather}
            weatherInfo={this.state.weather[0]}
            units={this.state.units === "metric" ? "°C" : "°F"}
          />
          <WeatherMoreDetails
            location={this.state.location}
            weatherData={this.state.currentWeather}
            weatherInfo={this.state.weather[0]}
            units={this.state.units === "metric" ? "°C" : "°F"}
          />
        </div>
        <div className="weather-days">
          {this.state.weather.map((d) => (
            <WeatherDay
              key={d.datetimeEpoch}
              maxAll={maxAll}
              minAll={minAll}
              weatherData={d}
              units={this.state.units === "metric" ? "°C" : "°F"}
            />
          ))}
        </div>
      </div>
    ) : (
      <div className="loading-screen">Loading...</div>
    );
  }
}

export default WeatherForecast;
