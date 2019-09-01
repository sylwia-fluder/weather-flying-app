import translations from '../../translations/en.json';
import {OWM} from './constants';

const {
  weather: {
    errors,
    blank_data,
    units,
  },
} = translations;

const getErrorText = error_code => {
  switch (error_code) {
    case '400': return errors['400'];
    case '404': return errors['404'];
    default: return errors['default'];
  }
};

const getUnitsText = () => units[OWM.PARAMS.units];

export {
  getErrorText,
  getUnitsText,
  blank_data,
};