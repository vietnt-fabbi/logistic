import { useContext } from 'react';
import { LanguageContext } from './context';
import { translations, defaultLang } from './translations';

function lookup(dict, path) {
    let cursor = dict;
    for (const seg of path.split('.')) {
        if (cursor && typeof cursor === 'object' && seg in cursor) {
            cursor = cursor[seg];
        } else {
            return undefined;
        }
    }
    return cursor;
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) {
        // Safe fallback for components rendered outside provider (e.g. PrintView legacy paths)
        return {
            lang: defaultLang,
            setLang: () => {},
            t: (path, fallback) => {
                const value = lookup(translations[defaultLang], path);
                return value !== undefined ? value : (fallback !== undefined ? fallback : path);
            },
        };
    }
    return ctx;
}

export function useT() {
    return useLanguage().t;
}
