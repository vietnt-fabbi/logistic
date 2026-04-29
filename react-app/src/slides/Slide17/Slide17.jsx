import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { useT } from '../../i18n/useLanguage';
import styles from './Slide17.module.css';

export default function Slide17() {
    const t = useT();
    return (
        <SlideLayout theme="light">
            <Header
                title={t('slide17.title')}
                icon="fas fa-clipboard-list"
                iconColor="#9333ea"
                subtitle={t('slide17.subtitle')}
            />

            <div className={styles.body}>
                {/* Left: Table */}
                <div className={styles.tablePanel}>
                    <div className={styles.tablePanelHeader}>
                        <div className={styles.tablePanelTitle}>
                            <i className="fas fa-table" />
                            {t('slide17.tableTitle')}
                        </div>
                    </div>
                    <div className={styles.screenshotFrame}>
                        <img src="./images/slide-17 - annual report 16.jpg" alt="Annual Report 16" />
                    </div>
                </div>

                {/* Right: Sidebar */}
                <div className={styles.sidebar}>

                    {/* Actual BOM link */}
                    <div className={styles.bomLinkCard}>
                        <div className={styles.bomLinkHeader}>
                            <div className={styles.bomLinkIcon}>
                                <i className="fas fa-link" />
                            </div>
                            <div className={styles.bomLinkTitle}>{t('slide17.bomLinkTitle')}</div>
                        </div>
                        <div className={styles.bomLinkDesc}>
                            {t('slide17.bomLinkDesc')}
                        </div>
                    </div>

                    <div className={styles.sidebarCard}>
                        <div className={styles.sidebarCardTitle}>
                            <i className="fas fa-bolt" />
                            {t('slide17.cardTitle')}
                        </div>
                        <div className={styles.featureList}>
                            <div className={styles.featureItem}>
                                <div className={`${styles.featureIcon} ${styles.featureIconPurple}`}>
                                    <i className="fas fa-file-export" />
                                </div>
                                <div className={styles.featureText}>
                                    <div className={styles.featureTitle}>{t('slide17.feat1Title')}</div>
                                    <div className={styles.featureDesc}>{t('slide17.feat1Desc')}</div>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={`${styles.featureIcon} ${styles.featureIconBlue}`}>
                                    <i className="fas fa-calendar-alt" />
                                </div>
                                <div className={styles.featureText}>
                                    <div className={styles.featureTitle}>{t('slide17.feat2Title')}</div>
                                    <div className={styles.featureDesc}>{t('slide17.feat2Desc')}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer text={t('slide17.footer')} />
        </SlideLayout>
    );
}
