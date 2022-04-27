import React, { Component } from "react";
import "../other/weather-icons.css";
import conditionToIcon from "../utils/conditionToIcon";

class WeatherDay extends Component {
  getDayFromDate() {
    const date = new Date(this.props.weatherData.datetime);

    let dayIndex = date.getDay();
    console.log(date);

    return (
      [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ][dayIndex] || ""
    );
  }

  render() {
    return (
      <div className="weather-day">
        <span className="weather-day-data day">{this.getDayFromDate()}</span>
        <i className={`wi ${conditionToIcon(this.props.weatherData.icon)}`}></i>
        <span className="weather-day-data temperature">
          {this.props.weatherData.tempmax}
          {this.props.units}
        </span>
        <span className="weather-day-data temperature">
          {this.props.weatherData.tempmin}
          {this.props.units}
        </span>
      </div>
    );
  }
}

export default WeatherDay;
