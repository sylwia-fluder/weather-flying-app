const OWM_KEY = '4154ed0a287b5786ba5b635fc52dae27';
const OWM = {
    URL: 'https://api.openweathermap.org/data/2.5/forecast',
    PARAMS: {
        appid: OWM_KEY,
        lang: 'pl',
        units: 'metric',
    },
};

const OWN_ICON = {
    URL: 'http://openweathermap.org/img/wn/',
    TYPE: '@2x.png',
};

export {
    OWM,
    OWN_ICON,
};