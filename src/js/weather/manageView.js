import {getErrorText} from './getTranslations';
import {manageData} from './manageData';

// TODO: BLOCKED: waiting for html - change to gets elements
// TODO: BLOCKED: waiting for html - change logic for show/hide elements
const elementForError = document.getElementById('weather_error');
const elementForLoader = document.getElementById('weather_loader');
const elementForData = document.getElementById('weather_data');

const showErrorBox = (error_code) => {
    elementForError.innerText = getErrorText(error_code);
    hideLoader();
    elementForError.classList.remove('hidden');
};

const hideErrorBox = () => elementForError.classList.add('hidden');

const showLoader = () => hideData() && hideErrorBox() && elementForLoader.classList.remove('hidden');

const hideLoader = () => elementForLoader.classList.add('hidden');

const showData = (data) => {
    hideLoader();
    const weathers = manageData(data);

    //TODO: BLOCKED: waiting for html - push data to html
};

const hideData = () => elementForData.classList.add('hidden');

export {
    showErrorBox,
    hideErrorBox,
    showLoader,
    hideLoader,
    showData,
    hideData,
};