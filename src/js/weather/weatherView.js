import { manageData } from './weatherData';
import { importAllFiles } from './helpers';
const images = importAllFiles(
  require.context('../../images/weather-icon/', false)
);

const elementForData = document.getElementsByClassName('day');

const showData = data => {
  addDataToBoxWeather(manageData(data));
};

const addDataToBoxWeather = weathers => {
  weathers.forEach((item, index) => {
    const elementDay = elementForData[index];

    elementDay.querySelector('.weather-date').textContent = item.date;
    elementDay.querySelector('.weather-week-day').textContent = item.day;
    elementDay.querySelector('.day-temp').textContent = item.temp;
    elementDay.querySelector('.night-temp').textContent = item.temp_night;
    elementDay.querySelector('.day-icon').src = images[item.icon];
    elementDay.querySelector('.night-icon').src = images[item.icon_night];
  })
};

export { showData };
