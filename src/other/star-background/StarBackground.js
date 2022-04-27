import React, { Component } from "react";
import "./StarBackground.css";

class StarBackground extends Component {
  render() {
    return (
      <div className="background">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
    );
  }
}

export default StarBackground;
