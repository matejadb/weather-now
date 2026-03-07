import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCityName } from "../services/apiGeocoding";

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export const fetchLocation = createAsyncThunk(
  "weatherData/fetchLocation",
  async function () {
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    const locationObj = await getCityName(position);
    const location = `${locationObj?.city}, ${locationObj.countryName}`;

    return { position, location };
  },
);

export const fetchWeather = createAsyncThunk(
  "weatherData/fetchWeather",
  async function (position) {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${position.latitude}&longitude=${position.longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,weather_code,wind_speed_10m,precipitation,relative_humidity_2m,apparent_temperature`,
    );
    const data = await res.json();

    return data;
  },
);

const initialState = {
  current: {},
  daily: {},
  hourly: {},
  status: "idle",
  error: "",
  location: "",
  position: null,
  searchQuery: "",
};

const weatherDataSlice = createSlice({
  name: "weatherData",
  initialState,
  reducers: {
    updateSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchLocation.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLocation.fulfilled, (state, action) => {
        state.location = action.payload.location;
        state.position = action.payload.position;
        state.status = "idle";
      })
      .addCase(fetchLocation.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "error";
      })

      .addCase(fetchWeather.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.current = action.payload.current;
        state.hourly = action.payload.hourly;
        state.daily = action.payload.daily;
        state.status = "idle";
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "error";
      }),
});

export default weatherDataSlice.reducer;
