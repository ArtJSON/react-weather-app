import React, { Component } from "react";
import "../other/weather-icons.css";
import conditionToIcon from "../utils/conditionToIcon";

class WeatherDetails extends Component {
  render() {
    return (
      <div className="weather-day">
        <span className="weather-day-data day">{this.getDayFromDate()}</span>
        <i className={`wi ${conditionToIcon(this.props.weatherData.icon)}`}></i>
        <span className="weather-day-data temperature">
          {this.props.weatherData.tempmax}
        </span>
      </div>
    );
  }
}

export default WeatherDetails;
