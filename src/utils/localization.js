import { default as ru } from '../assets/localization/ru';
import { default as en } from '../assets/localization/en';

const getLocale = () => {
    if (!window.navigator) {
        return 'en';
    }
    const language = window.navigator.language || window.navigator.systemLanguage || window.navigator.userLanguage;

    return language.slice(0, 2).toLowerCase() === 'ru' ? 'ru' : 'en';
};

const locale = getLocale();

const map = locale === 'ru' ? ru : en;

export default key => map[key];
