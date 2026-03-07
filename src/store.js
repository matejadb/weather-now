import { configureStore } from "@reduxjs/toolkit";
import weatherUnitsReducer from "./slices/weatherUnitsSlice";
import weatherDataReducer from "./slices/weatherDataSlice";

const store = configureStore({
  reducer: {
    weatherUnits: weatherUnitsReducer,
    weatherData: weatherDataReducer,
  },
});

export default store;
