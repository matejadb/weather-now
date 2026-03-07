export async function getCityName({ latitude, longitude }) {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}}&longitude=${longitude}}&localityLanguage=en`,
  );

  if (!res.ok) throw new Error("Failed getting city and country");

  const data = await res.json();
  return data;
}

export async function getCityPosition(cityName) {
  const res = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=en&format=json`,
  );

  if (!res.ok) throw new Error("Failed getting city position");

  const data = await res.json();

  return data;
}
