import "./style.css";
import SearchIcon from "./search.svg";

function WebsiteController(deafaultTerm) {
  const searchBtn = document.getElementById(`search-btn`);
  const searchBox = document.getElementById(`search-box`);
  let a = `0e47563375ad412e91d222413241106`;
  searchBtn.setAttribute(`src`, SearchIcon);

  class Weather {
    constructor(
      name,
      region,
      country,
      localTime,
      tempC,
      tempF,
      condition,
      windM,
      windK,
      windDir,
      humidity,
      uv
    ) {
      this.name = name;
      this.region = region;
      this.country = country;
      this.localTime = localTime;
      this.tempC = tempC;
      this.tempF = tempF;
      this.conditionText = condition.text;
      this.conditionIcon = condition.icon;
      this.windM = windM;
      this.windK = windK;
      this.windDir = windDir;
      this.humidity = humidity;
      this.uv = uv;
    }
  }

  function DomUpdate(weatherData) {
    const nameElement = document.getElementById("name");
    const regionElement = document.getElementById("region");
    const countryElement = document.getElementById("country");
    const timeElement = document.getElementById("time");
    const conditionTextElement = document.getElementById("condition-text");
    const icon = document.getElementById(`icon`);
    const tempFElement = document.getElementById("temp-f");
    const tempCElement = document.getElementById("temp-c");
    const humidityElement = document.getElementById("humidity");
    const uvElement = document.getElementById("uv");
    const windMphElement = document.getElementById("wind-mph");
    const windKphElement = document.getElementById("wind-kph");
    const windDirElement = document.getElementById("wind-dir");

    conditionTextElement.textContent = weatherData.conditionText;
    icon.setAttribute(`src`, weatherData.conditionIcon);
    countryElement.textContent = weatherData.country;
    humidityElement.textContent = `Humidity: ${weatherData.humidity}%`;
    timeElement.textContent = `${weatherData.localTime}`;
    nameElement.textContent = `${weatherData.name}`;
    regionElement.textContent = `${weatherData.region}`;
    tempCElement.textContent = `${weatherData.tempC}°C`;
    tempFElement.textContent = `${weatherData.tempF}°F`;
    uvElement.textContent = `UV Index: ${weatherData.uv}`;
    windDirElement.textContent = `Wind Direction: ${weatherData.windDir}`;
    windKphElement.textContent = `${weatherData.windK} km/h`;
    windMphElement.textContent = `${weatherData.windM} mph`;
  }

  const weatherCleaner = (data) => {
    return new Weather(
      data.location.name,
      data.location.region,
      data.location.country,
      data.location.localtime,
      data.current.temp_c,
      data.current.temp_f,
      data.current.condition,
      data.current.wind_mph,
      data.current.wind_kph,
      data.current.wind_dir,
      data.current.humidity,
      data.current.uv
    );
  };

  async function getWeather(term) {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${a}&q=${term}&aqi=no`,
      { mode: `cors` }
    );

    if (response.status == 200) {
      let data = await response.json();
      return data;
    } else {
      throw new Error(response.status);
    }
  }

  async function weatherHandler(searchTerm) {
    if (searchTerm === ``) {
      console.log(`no search term specified`);
    } else {
      try {
        let weatherData = await getWeather(searchTerm);
        let weather = weatherCleaner(weatherData);
        DomUpdate(weather);
        console.log(`Weather Handled`);
      } catch (error) {
        console.error(`Problem handling weather!`, error);
      }
    }
  }

  searchBtn.addEventListener(`click`, async () => {
    let searchTerm = document.getElementById(`search-box`).value;
    searchBox.value = ``;
    searchTerm = searchTerm.replace(/\s/g, "-");
    try {
      await weatherHandler(searchTerm);
    } catch (error) {
      console.error(`There was a problem!`, error);
    }
  });

  window.addEventListener(`keydown`, async (e) => {
    if (e.key == `Enter`) {
      let searchTerm = document.getElementById(`search-box`).value;
      searchBox.value = ``;
      searchTerm = searchTerm.replace(/[\s,]/g, "-");
      try {
        await weatherHandler(searchTerm);
      } catch (error) {
        console.error(`There was a problem!`, error);
      }
    }
  });

  window.addEventListener(`load`, () => {
    weatherHandler(deafaultTerm);
  });
}

WebsiteController(`Chicago`);
