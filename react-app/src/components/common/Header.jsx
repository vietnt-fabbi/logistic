import styles from './common.module.css';

export default function Header({ title, icon, iconColor = '#3b82f6', subtitle, badge, badgeStyle = {} }) {
    return (
        <div className={styles.header}>
            <div>
                <div className={styles.headerTitle}>
                    {icon && <i className={icon} style={{ color: iconColor }} />}
                    {title}
                </div>
                {subtitle && <div className={styles.headerSubtitle}>{subtitle}</div>}
            </div>
            {badge && (
                <div className={styles.headerBadge} style={badgeStyle}>
                    {badge}
                </div>
            )}
        </div>
    );
}
