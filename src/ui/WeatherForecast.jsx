function WeatherForecast({ children }) {
  return (
    <div className="xl:gird grid h-full min-h-0 grid-cols-1 gap-8 xl:grid-cols-(--lg-grid-cols)">
      {children}
    </div>
  );
}

export default WeatherForecast;
