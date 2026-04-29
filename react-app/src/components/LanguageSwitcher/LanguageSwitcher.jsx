import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../i18n/useLanguage';
import styles from './LanguageSwitcher.module.css';

const LANGS = [
    { code: 'vi', label: 'Tiếng Việt', short: 'VI', flag: 'VN' },
    { code: 'en', label: 'English', short: 'EN', flag: 'EN' },
    { code: 'ko', label: '한국어', short: 'KO', flag: 'KR' },
];

export default function LanguageSwitcher() {
    const { lang, setLang } = useLanguage();
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        function onClick(e) {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setOpen(false);
            }
        }
        document.addEventListener('mousedown', onClick);
        return () => document.removeEventListener('mousedown', onClick);
    }, []);

    const current = LANGS.find(l => l.code === lang) || LANGS[0];

    return (
        <div className={styles.wrapper} ref={wrapperRef}>
            <button
                className={styles.button}
                onClick={() => setOpen(v => !v)}
                title="Change language / Đổi ngôn ngữ / 언어 변경"
                aria-label="Change language"
            >
                <i className={`fas fa-globe ${styles.icon}`} />
                <span className={styles.short}>{current.short}</span>
                <i className={`fas fa-chevron-down ${styles.caret} ${open ? styles.caretOpen : ''}`} />
            </button>

            {open && (
                <div className={styles.menu} role="menu">
                    {LANGS.map(l => (
                        <button
                            key={l.code}
                            className={`${styles.item} ${l.code === lang ? styles.itemActive : ''}`}
                            onClick={() => { setLang(l.code); setOpen(false); }}
                            role="menuitem"
                        >
                            <span className={styles.itemShort}>{l.short}</span>
                            <span className={styles.itemLabel}>{l.label}</span>
                            {l.code === lang && <i className={`fas fa-check ${styles.itemCheck}`} />}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
