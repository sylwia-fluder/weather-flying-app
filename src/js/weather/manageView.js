import {getErrorText} from './getTranslations';
import {manageData} from './manageData';
import {importAllFiles} from './helpers';
const images = importAllFiles(require.context('../../images/weather-icon/', false));

const elementForError = document.getElementById('weather-error');
const elementForLoader = document.getElementById('weather-loading');
const boxWeather = document.querySelector('.box-weather');
const elementForData = document.getElementsByClassName('day');

const showErrorBox = error_code => {
  elementForError.innerText = getErrorText(error_code);
  hideLoader();
  elementForError.classList.remove('inactive');
};

const hideErrorBox = () => elementForError.classList.add('inactive');

const showLoader = () => {
  hideData();
  elementForLoader.classList.remove('inactive');
};

const hideLoader = () => elementForLoader.classList.add('inactive');

const showData = data => {
  hideLoader();
  addDataToBoxWeather(manageData(data));
  boxWeather.classList.add('show');
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

const hideData = () => boxWeather.classList.remove('show');

export {
  showErrorBox,
  hideErrorBox,
  showLoader,
  hideLoader,
  showData,
  hideData,
};
