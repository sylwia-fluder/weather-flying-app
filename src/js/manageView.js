const error = document.querySelector('#error-search');
const showError = () => error.classList.remove('inactive');
const hideError = () => error.classList.add('inactive');

const loading = document.querySelector('#loading-search');
const showLoading = () => loading.classList.remove('inactive');
const hideLoading = () => loading.classList.add('inactive');

const searchData = document.querySelector('.search-result');
const showSearchData = () => searchData.classList.add('active');
const hideSearchData = () => searchData.classList.remove('active');

const searchForm = document.querySelector('#search-form');
const correctForm = () => searchForm.classList.remove('incorrect');
const incorrectForm = () => searchForm.classList.add('incorrect');

const searchFormInput = document.querySelector('#search-form input');

export {
  showError,
  hideError,
  showLoading,
  hideLoading,
  showSearchData,
  hideSearchData,
  correctForm,
  incorrectForm,
  searchForm,
  searchFormInput,
};
