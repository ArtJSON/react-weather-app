import React, { Component } from "react";

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
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Search country, city, place..."
        />
        <button>Get Weather</button>
      </form>
    );
  }
}

export default WeatherForm;
