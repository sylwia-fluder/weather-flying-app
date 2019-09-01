import get from 'lodash.get';
import {blank_data, getUnitsText} from './getTranslations';

const getIcon = element => {
  return get(element, 'weather[0].icon', '');
};

const getTemp = element => {
  const temp = get(element, 'main.temp', null);
  if (temp !== null) return temp.toString().split('.')[0] + getUnitsText();
  return blank_data;
};

const manageData = data => {
  let lists = [];
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

  let weathers = [];
  for (let i = 0; i < lists.length - 1; i += 2) {
    weathers.push({
      ...lists[i],
      temp_night: lists[i + 1].temp,
      icon_night: lists[i + 1].icon,
    });
  }

  return weathers;
};

export {
  manageData,
};