import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { useT } from '../../i18n/useLanguage';
import styles from './Slide16.module.css';

export default function Slide16() {
    const t = useT();
    return (
        <SlideLayout theme="light">
            <Header
                title={t('slide16.title')}
                icon="fas fa-cube"
                iconColor="#10b981"
                subtitle={t('slide16.subtitle')}
            />

            <div className={styles.body}>
                {/* Left: Table */}
                <div className={styles.tablePanel}>
                    <div className={styles.tablePanelHeader}>
                        <div className={styles.tablePanelTitle}>
                            <i className="fas fa-table" />
                            {t('slide16.tableTitle')}
                        </div>
                    </div>
                    <div className={styles.screenshotFrame}>
                        <img src="./images/slide-16 - annual report 15a.jpg" alt="Annual Report 15A" />
                    </div>
                </div>

                {/* Right: Sidebar */}
                <div className={styles.sidebar}>
                    <div className={styles.sidebarCard}>
                        <div className={styles.sidebarCardTitle}>
                            <i className="fas fa-bolt" />
                            {t('slide16.cardTitle')}
                        </div>
                        <div className={styles.featureList}>
                            <div className={styles.featureItem}>
                                <div className={`${styles.featureIcon} ${styles.featureIconGreen}`}>
                                    <i className="fas fa-file-export" />
                                </div>
                                <div className={styles.featureText}>
                                    <div className={styles.featureTitle}>{t('slide16.feat1Title')}</div>
                                    <div className={styles.featureDesc}>{t('slide16.feat1Desc')}</div>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={`${styles.featureIcon} ${styles.featureIconBlue}`}>
                                    <i className="fas fa-calendar-alt" />
                                </div>
                                <div className={styles.featureText}>
                                    <div className={styles.featureTitle}>{t('slide16.feat2Title')}</div>
                                    <div className={styles.featureDesc}>{t('slide16.feat2Desc')}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer text={t('slide16.footer')} />
        </SlideLayout>
    );
}
