import CurrentWeather from "./CurrentWeather";
import DailyWeather from "./DailyWeather";
import Dropdown from "./Dropdown";
import ForecastHourly from "./ForecastHourly";
import ForecastMain from "./ForecastMain";
import Header from "./Header";
import Logo from "./Logo";
import Main from "./Main";
import Search from "./Search";
import Slogan from "./Slogan";
import WeatherForecast from "./WeatherForecast";

const weatherData = {
  location: "Berlin, Germany",
  date: "Tuesday, Aug 5, 2025",
  temperature: 20,
  feelsLike: 18,
  humidity: 46,
  wind: 14,
  precipitation: 0,
};

function App() {
  return (
    <div className="flex flex-col gap-12 bg-neutral-900 px-4 pt-4 pb-12 md:px-6 md:pt-6 md:pb-20 lg:gap-16 lg:px-28 lg:pt-12">
      <Header>
        <Logo />
        <Dropdown />
      </Header>

      <Slogan />

      <Main>
        <Search />
        <WeatherForecast>
          <ForecastMain>
            <CurrentWeather weatherData={weatherData} />
            <DailyWeather />
          </ForecastMain>
          <ForecastHourly />
        </WeatherForecast>
      </Main>
    </div>
  );
}

export default App;
