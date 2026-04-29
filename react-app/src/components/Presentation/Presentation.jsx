import { useState, useEffect, useCallback, useRef } from 'react';
import { slideList } from '../../slides';
import { useT } from '../../i18n/useLanguage';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import styles from './Presentation.module.css';

export default function Presentation() {
    const [current, setCurrent] = useState(0);
    const [showList, setShowList] = useState(false);
    const [visible, setVisible] = useState(true);
    const containerRef = useRef(null);
    const hideTimerRef = useRef(null);
    const total = slideList.length;
    const t = useT();

    const goTo = useCallback((index) => {
        if (index >= 0 && index < total) setCurrent(index);
    }, [total]);

    const next = useCallback(() => goTo(current + 1), [current, goTo]);
    const prev = useCallback(() => goTo(current - 1), [current, goTo]);

    // Auto-scale slide container
    useEffect(() => {
        function scale() {
            if (!containerRef.current) return;
            const vw = window.innerWidth;
            const vh = window.innerHeight - 56;
            const s = Math.min(vw / 1280, vh / 720);
            containerRef.current.style.transform = `scale(${s})`;
        }
        scale();
        window.addEventListener('resize', scale);
        return () => window.removeEventListener('resize', scale);
    }, []);

    // Keyboard
    useEffect(() => {
        function handleKey(e) {
            if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') { e.preventDefault(); next(); }
            else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); prev(); }
            else if (e.key === 'Home') { e.preventDefault(); goTo(0); }
            else if (e.key === 'End') { e.preventDefault(); goTo(total - 1); }
            else if (e.key === 'f' || e.key === 'F') {
                if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(() => { });
                else document.exitFullscreen();
            }
            else if (e.key === 'l' || e.key === 'L') setShowList(v => !v);
            else if (e.key === 'Escape') setShowList(false);
        }
        document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey);
    }, [next, prev, goTo, total]);

    // Mouse idle
    useEffect(() => {
        function show() {
            setVisible(true);
            clearTimeout(hideTimerRef.current);
            hideTimerRef.current = setTimeout(() => {
                if (document.fullscreenElement) setVisible(false);
            }, 3000);
        }
        document.addEventListener('mousemove', show);
        return () => document.removeEventListener('mousemove', show);
    }, []);

    const SlideComponent = slideList[current].component;

    return (
        <>
            {/* Progress bar */}
            <div className={styles.progressBar} style={{ width: `${((current + 1) / total) * 100}%` }} />

            {/* Language switcher (top-right) */}
            <LanguageSwitcher />

            {/* Slide */}
            <div className={styles.slideWrapper}>
                <div ref={containerRef} className={styles.slideContainer}>
                    <SlideComponent />
                </div>
            </div>

            {/* Controls */}
            <div className={`${styles.controls} ${visible ? styles.controlsVisible : ''}`}>
                <button className={styles.ctrlBtn} onClick={() => setShowList(v => !v)} title="Slide list (L)">
                    <i className="fas fa-list" />
                </button>
                <button className={`${styles.ctrlBtn} ${current === 0 ? styles.ctrlBtnDisabled : ''}`} onClick={() => goTo(0)} title="Home">
                    <i className="fas fa-step-backward" />
                </button>
                <button className={`${styles.ctrlBtn} ${current === 0 ? styles.ctrlBtnDisabled : ''}`} onClick={prev} title="Prev (←)">
                    <i className="fas fa-chevron-left" />
                </button>
                <div className={styles.slideCounter}>{current + 1} / {total}</div>
                <button className={`${styles.ctrlBtn} ${current === total - 1 ? styles.ctrlBtnDisabled : ''}`} onClick={next} title="Next (→)">
                    <i className="fas fa-chevron-right" />
                </button>
                <button className={`${styles.ctrlBtn} ${current === total - 1 ? styles.ctrlBtnDisabled : ''}`} onClick={() => goTo(total - 1)} title="End">
                    <i className="fas fa-step-forward" />
                </button>
                <button className={styles.ctrlBtn} onClick={() => {
                    if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(() => { });
                    else document.exitFullscreen();
                }} title="Fullscreen (F)">
                    <i className="fas fa-expand" />
                </button>
            </div>

            {/* Slide list */}
            <div className={`${styles.slideList} ${showList ? styles.slideListOpen : ''}`}>
                {slideList.map((slide, i) => (
                    <div
                        key={slide.id}
                        className={`${styles.slideThumb} ${i === current ? styles.slideThumbActive : ''}`}
                        onClick={() => { goTo(i); setShowList(false); }}
                    >
                        <div className={styles.thumbNum}>Slide {slide.id}</div>
                        <div className={styles.thumbTitle}>{t(`slideList.s${slide.id}`, slide.title)}</div>
                    </div>
                ))}
            </div>
        </>
    );
}
