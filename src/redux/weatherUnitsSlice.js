import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nextMetricSystem: "Imperial",
  temperatureUnit: "Celsius (°C)",
  windSpeedUnit: "km/h",
  precipitationUnit: "Millimeters (mm)",
};

const weatherUnitsSlice = createSlice({
  name: "weatherUnits",
  initialState,
  reducers: {
    updateNextMetricSystem(state, action) {
      state.nextMetricSystem = action.payload;
    },
    updateUnitsToMetric(state) {
      state.temperatureUnit = "Celsius (°C)";
      state.windSpeedUnit = "km/h";
      state.precipitationUnit = "Millimeters (mm)";
    },
    updateUnitsToImperial(state) {
      state.temperatureUnit = "Fahrenheit (°F)";
      state.windSpeedUnit = "mph";
      state.precipitationUnit = "Inches (in)";
    },
    updateTemperatureUnit(state, action) {
      state.temperatureUnit = action.payload;
    },
    updateWindSpeedUnit(state, action) {
      state.windSpeedUnit = action.payload;
    },
    updatePrecipitationUnit(state, action) {
      state.precipitationUnit = action.payload;
    },
  },
});

export const {
  updateNextMetricSystem,
  updateUnitsToMetric,
  updateUnitsToImperial,
  updateTemperatureUnit,
  updateWindSpeedUnit,
  updatePrecipitationUnit,
} = weatherUnitsSlice.actions;

export default weatherUnitsSlice.reducer;
