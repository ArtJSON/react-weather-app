import React, { Component } from "react";
import "./WeatherForm.css";
import "../other/weather-icons.css";

class WeatherForm extends Component {
  constructor(props) {
    super(props);
    this.state = { location: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ location: event.target.value });
  }

  handleSubmit(event) {
    this.props.handleLocation(this.state.location);
    event.preventDefault();
  }

  render() {
    return (
      <div className="controls-container">
        <form className="form-container" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Search country, city, place..."
          />
          <button>
            <i className="wi wi-cloud-down"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default WeatherForm;
