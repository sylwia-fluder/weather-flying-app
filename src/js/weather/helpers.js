const urlWithParams = (url, params) => {
  const urlFetch = new URL(url);
  Object.keys(params).forEach(key =>
    urlFetch.searchParams.append(key, params[key])
  );
  return urlFetch;
};

const importAllFiles = r => {
  const images = {};
  r.keys().forEach(item =>
    images[item.replace('./', '').replace('.png', '')] = r(item)
  );
  return images;
};

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

Date.prototype.getNextDay = function() {
  return this.setDate(this.getDate() + 1);
};

Date.prototype.getNoon = function() {
  return this.setHours(12, 0, 0, 0);
};

Date.prototype.addHours = function(h) {
  this.setTime(this.getTime() + h * 60 * 60 * 1000);
  return this;
};

Date.prototype.getDayName = function() {
  return days[this.getDay()];
};

Date.prototype.getParseDate = function() {
  const day = ('0' + this.getDate()).slice(-2);
  const month = ('0' + (this.getMonth() + 1)).slice(-2);
  return day + '/' + month + '/' + this.getFullYear();
};

export { urlWithParams, importAllFiles };
