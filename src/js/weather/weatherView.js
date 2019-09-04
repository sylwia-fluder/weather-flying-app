import {manageData} from './weatherData';
import {importAllFiles} from './helpers';
const images = importAllFiles(
  require.context('../../images/weather-icon/', false)
);

const elementForData = document.getElementsByClassName('day');

const showData = data => {
  addDataToBoxWeather(manageData(data));
};

const addDataToBoxWeather = weathers => {
  for (let i = 0; i < weathers.length; i++) {
    const weatherForDay = weathers[i];
    const elementDay = elementForData[i];

    elementDay.querySelector('.weather-date').textContent = weatherForDay.date;
    elementDay.querySelector('.weather-week-day').textContent = weatherForDay.day;
    elementDay.querySelector('.day-temp').textContent = weatherForDay.temp;
    elementDay.querySelector('.night-temp').textContent = weatherForDay.temp_night;
    elementDay.querySelector('.day-icon').src = images[weatherForDay.icon];
    elementDay.querySelector('.night-icon').src = images[weatherForDay.icon_night];
  }
};

export {showData};
