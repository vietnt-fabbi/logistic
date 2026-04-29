import { useEffect, useState, useMemo, useCallback } from 'react';
import { LanguageContext } from './context';
import { translations, defaultLang, supportedLangs } from './translations';

const STORAGE_KEY = 'ken-presentation-lang';

function getInitialLang() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved && supportedLangs.includes(saved)) return saved;
    } catch {
        // ignore
    }
    return defaultLang;
}

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

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState(getInitialLang);

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch {
            // ignore
        }
        document.documentElement.lang = lang;
    }, [lang]);

    const t = useCallback((path, fallback) => {
        const value = lookup(translations[lang] || translations[defaultLang], path);
        if (value !== undefined) return value;
        const fallbackValue = lookup(translations[defaultLang], path);
        if (fallbackValue !== undefined) return fallbackValue;
        return fallback !== undefined ? fallback : path;
    }, [lang]);

    const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}
