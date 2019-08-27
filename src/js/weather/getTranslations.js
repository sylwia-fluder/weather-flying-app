import translations from '../../translations/en.json';

const {
    weather: {
        errors,
    },
} = translations;

const getErrorText = (error_code) => {
    switch (error_code) {
        case '400':
            return errors['400'];
        case '404':
            return errors['404'];
        default:
            return errors['default'];
    }
};

export {
    getErrorText,
};