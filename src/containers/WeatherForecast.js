import React, { Component } from "react";
import WeatherForm from "../components/WeatherForm";
import axios from "axios";

class WeatherForecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      weather: [],
    };

    this.setLocation = this.setLocation.bind(this);
  }

  async componentDidMount() {
    let res = await axios.get("https://ipapi.co/json/");

    let loc = `${res.data.country_name}, ${res.data.city}`;

    this.setState({ location: loc });
  }

  setLocation(loc) {
    this.setState({ location: loc });
  }

  setWeather() {
    const location = this.state.location;
  }

  render() {
    return (
      <div className="weather-forecast">
        <WeatherForm handleLocation={this.setLocation} />
        <h1>Forecast for {this.state.location}</h1>
        <div className="weather-day">{this.state.weather.days}</div>
      </div>
    );
  }
}

export default WeatherForecast;
