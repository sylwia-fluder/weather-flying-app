import get from 'lodash.get';
import { blank_data, getUnitsText } from './getTranslations';

const getIcon = element => {
  return get(element, 'weather[0].icon', '');
};

const getTemp = element => {
  const temp = get(element, 'main.temp', null);
  if (temp !== null) return temp.toString().split('.')[0] + getUnitsText();
  return blank_data;
};

const manageData = data => {
  const lists = [];
  const date = new Date();
  date.getNextDay();
  date.getNoon();

  data.list.map(element => {
    const dt = new Date(element.dt_txt).getTime();

    if (dt === date.getTime()) {
      lists.push({
        date: date.getParseDate(),
        day: date.getDayName(),
        temp: getTemp(element),
        icon: getIcon(element),
      });
      date.addHours(12);
    }
  });

  const weathers = [];
  lists.map((element, index) => {
    if (index % 2 === 0) {
      const weatherNight = lists[index + 1];
      if (typeof weatherNight !== 'undefined') {
        weathers.push({
          ...element,
          temp_night: weatherNight.temp,
          icon_night: weatherNight.icon,
        })
      }
    }
  });

  return weathers;
};

export { manageData };
