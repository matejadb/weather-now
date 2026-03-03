function WeatherForecast({ children }) {
  return (
    <div className="xl:gird grid grid-cols-1 gap-8 xl:grid-cols-(--lg-grid-cols)">
      {children}
    </div>
  );
}

export default WeatherForecast;
