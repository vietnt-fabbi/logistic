import { useEffect, useRef } from 'react';
import styles from './SlideLayout.module.css';

export default function SlideLayout({ children, theme = 'light', className = '' }) {
    const slideRef = useRef(null);

    // useEffect(() => {
    //     function scaleSlide() {
    //         if (!slideRef.current) return;
    //         const parent = slideRef.current.parentElement;
    //         const scaleX = parent.clientWidth / 1280;
    //         const scaleY = parent.clientHeight / 720;
    //         slideRef.current.style.transform = `scale(${Math.min(scaleX, scaleY)})`;
    //     }
    //     scaleSlide();
    //     window.addEventListener('resize', scaleSlide);
    //     return () => window.removeEventListener('resize', scaleSlide);
    // }, []);

    return (
        <div className={styles.wrapper}>
            <div
                ref={slideRef}
                className={`${styles.slide} ${styles[theme]} ${className}`}
            >
                {children}
            </div>
        </div>
    );
}
