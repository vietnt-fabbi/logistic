import styles from './common.module.css';

export default function Footer({ text }) {
    return (
        <div className={styles.footer}>
            <div className={styles.footerInfo}>
                <i className="fas fa-info-circle" />
                {text}
            </div>
        </div>
    );
}
