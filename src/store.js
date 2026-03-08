import { configureStore } from "@reduxjs/toolkit";
import weatherUnitsReducer from "./redux/weatherUnitsSlice";
import weatherDataReducer from "./redux/weatherDataSlice";

const store = configureStore({
  reducer: {
    weatherUnits: weatherUnitsReducer,
    weatherData: weatherDataReducer,
  },
});

export default store;
