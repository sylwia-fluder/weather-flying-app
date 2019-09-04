import '../src/style.scss';
import singlePageApplication from './singlePageApplication';
import getFlight from './js/flights/flightView';
import getWeather from './js/weather/';
import * as View from './js/manageView';

document.addEventListener('DOMContentLoaded', singlePageApplication.init);

View.searchFormInput.addEventListener('change', () => View.correctForm());

View.searchForm.addEventListener('submit', e => {
  e.preventDefault();

  const inputValue = View.searchFormInput.value;
  if (inputValue.length === 0) {
    View.incorrectForm();
    return false;
  }

  View.hideSearchData();
  View.hideError();
  View.showLoading();

  Promise.all([getFlight(inputValue), getWeather(inputValue)])
    .then(() => {
      View.showSearchData();
      View.hideLoading();
    })
    .catch(() => {
      View.hideLoading();
      View.showError();
    });
});
