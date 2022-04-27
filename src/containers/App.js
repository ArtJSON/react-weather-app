import "./App.css";
import WeatherForecast from "./WeatherForecast";
import StarBackground from "../other/star-background/StarBackground";

function App() {
  return (
    <div className="App">
      <StarBackground />
      <WeatherForecast />
    </div>
  );
}

export default App;
