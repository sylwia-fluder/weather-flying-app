import translations from '../../translations/en.json';
import {OWM} from './constants';

const {
  weather: {blank_data, units},
} = translations;

const getUnitsText = () => units[OWM.PARAMS.units];

export {getUnitsText, blank_data};
