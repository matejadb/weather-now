import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCityName, getCityPosition } from "../services/apiGeocoding";

const FALLBACK_LOCATION = {
  position: {
    latitude: 52.52437,
    longitude: 13.41053,
  },
  location: "Berlin, Germany",
};

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export const fetchLocation = createAsyncThunk(
  "weatherData/fetchLocation",
  async function (query, thunkAPI) {
    let position;
    let location;

    if (!query) {
      const positionObj = await getPosition();

      if (!positionObj) throw new Error("no results");

      position = {
        latitude: positionObj.coords.latitude,
        longitude: positionObj.coords.longitude,
      };

      const locationObj = await getCityName(position);
      location = `${locationObj?.city}, ${locationObj.countryName}`;
    } else {
      const positionObj = await getCityPosition(query);

      if (!positionObj.results?.length) {
        throw new Error("no results");
      }

      position = {
        latitude: positionObj.results[0].latitude,
        longitude: positionObj.results[0].longitude,
      };

      location = `${positionObj.results[0].name}, ${positionObj.results[0].country}`;
    }

    thunkAPI.dispatch(fetchWeather(position));

    return { position, location };
  },
);

export const fetchWeather = createAsyncThunk(
  "weatherData/fetchWeather",
  async function (position) {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${position.latitude}&longitude=${position.longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,weather_code,wind_speed_10m,precipitation,relative_humidity_2m,apparent_temperature`,
    );

    if (!res.ok) throw new Error("bad request");

    const data = await res.json();

    return data;
  },
);

const initialState = {
  current: null,
  daily: null,
  hourly: null,
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
        state.error = "";
      })
      .addCase(fetchLocation.fulfilled, (state, action) => {
        state.location = action.payload.location;
        state.position = action.payload.position;
        state.status = "idle";
      })
      .addCase(fetchLocation.rejected, (state, action) => {
        state.error = action.error.message || "User denied Geolocation";
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

export const { updateSearchQuery } = weatherDataSlice.actions;

export default weatherDataSlice.reducer;
