import React, { Component } from "react";
import "../other/weather-icons.css";
import conditionToIcon from "../utils/conditionToIcon";

class WeatherDetails extends Component {
  render() {
    return (
      <div className="weather-details">
        <h1>Now</h1>
        <i className={`wi ${conditionToIcon(this.props.weatherData.icon)}`}></i>
        <p>
          {this.props.weatherData.temp}
          {this.props.units}
        </p>
        <p>{this.props.weatherData.conditions}</p>
        <p>{this.props.weatherData.sunrise}</p>
        <p>{this.props.weatherData.sunset}</p>
      </div>
    );
  }
}

export default WeatherDetails;
