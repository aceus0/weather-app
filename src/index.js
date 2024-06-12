import './style.css';



function WebsiteController() {
    const searchBtn = document.getElementById(`search-btn`);

    class Weather {
        constructor(name, region, country, localTime, tempC, tempF, condition, windM, windK, windDir, humidity, uv) {
            this.name = name;
            this.region = region;
            this.country = country;
            this.localTime = localTime;
            this.tempC = tempC;
            this.tempF = tempF;
            this.condition = condition;
            this.windM = windM;
            this.windK = windK;
            this.windDir = windDir;
            this.humidity = humidity;
            this.uv = uv;
        }
    }
        
    const DomFactory = (weatherData) => {

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
        )
    }

    async function getWeather(term) {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=0e47563375ad412e91d222413241106&q=${term}&aqi=no`, {mode: `cors`});

        if (response.status == 200) {
            let data = await response.json();
            return data;
        } else {
            throw new Error(response.status);
        }
    }


    searchBtn.addEventListener(`click`, async () => {
        searchTerm = document.getElementById(`search-box`).value
        searchTerm = searchTerm.replace(/\s/g, '-');
        try {
            let weatherData = await getWeather(searchTerm);
            let weather = weatherCleaner(weatherData);
            console.table(weather);
        } catch (error) {
            console.error(`There was a problem!`, error);
        }


    })
}

const live = WebsiteController();