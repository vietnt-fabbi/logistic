import styles from './common.module.css';

export default function ScreenshotFrame({ src, alt, title, titleIcon, titleIconColor, tags = [], flex = 3, className = '' }) {
    return (
        <div className={`${styles.screenshotPanel} ${className}`} style={{ flex }}>
            {(title || tags.length > 0) && (
                <div className={styles.screenshotHeader}>
                    {title && (
                        <div className={styles.screenshotTitle}>
                            {titleIcon && <i className={titleIcon} style={{ color: titleIconColor }} />}
                            {title}
                        </div>
                    )}
                    {tags.length > 0 && (
                        <div className={styles.screenshotTags}>
                            {tags.map((tag, i) => (
                                <div key={i} className={styles.tag} style={{ background: tag.bg, color: tag.color }}>
                                    {tag.label}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
            <div className={styles.screenshotFrame}>
                <img src={src} alt={alt || title || ''} />
            </div>
        </div>
    );
}
