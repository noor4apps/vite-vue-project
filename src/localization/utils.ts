import {config} from '@/config'

// key that will use to save the user preferred locale id
const userPreferredLocaleStorageKey = 'user-lcid'

// helper to return he default local form config
export const getDefaultLocale = () => {
    // get a reference from the available locales array from our config
    const availableLocales = config.localization.locales;
    // return the one marked isDefault
    return availableLocales.find((o) => o.isDefault) as {
        key: string;
        isDefault: boolean;
    };
};

// helper method to retrieve the user preferred locale from localStorage
export const getUserPreferredLocale = () => {
    // try to retrieve from local storage if they have one saved
    const preferredLocale = localStorage.getItem(userPreferredLocaleStorageKey);
    if (!preferredLocale) {
        // if not, use the default locale from config
        const defaultLocale = getDefaultLocale().key;
        console.log('getUserPreferredLocale defaultLocale', defaultLocale);
        return defaultLocale;
    }
    return preferredLocale;
};

// helper to save the user preferred locale to localStorage
export const setUserPreferredLocale = (lcid: string) => {
    localStorage.setItem(userPreferredLocaleStorageKey, lcid);
};
