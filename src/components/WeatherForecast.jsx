function WeatherForecast({ children }) {
  return (
    <div className="lg:gird grid grid-cols-1 gap-8 lg:grid-cols-(--lg-grid-cols)">
      {children}
    </div>
  );
}

export default WeatherForecast;
