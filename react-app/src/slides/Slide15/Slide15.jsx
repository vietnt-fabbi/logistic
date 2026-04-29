import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { useT } from '../../i18n/useLanguage';
import styles from './Slide15.module.css';

export default function Slide15() {
    const t = useT();
    return (
        <SlideLayout theme="light">
            <Header
                title={t('slide15.title')}
                icon="fas fa-boxes"
                iconColor="#3b82f6"
                subtitle={t('slide15.subtitle')}
            />

            <div className={styles.body}>
                {/* Left: Table */}
                <div className={styles.tablePanel}>
                    <div className={styles.tablePanelHeader}>
                        <div className={styles.tablePanelTitle}>
                            <i className="fas fa-table" />
                            {t('slide15.tableTitle')}
                        </div>
                    </div>
                    <div className={styles.screenshotFrame}>
                        <img src="./images/slide-15 - annual report 15.jpg" alt="Annual Report 15" />
                    </div>
                </div>

                {/* Right: Sidebar */}
                <div className={styles.sidebar}>
                    <div className={styles.sidebarCard}>
                        <div className={styles.sidebarCardTitle}>
                            <i className="fas fa-bolt" />
                            {t('slide15.cardTitle')}
                        </div>
                        <div className={styles.featureList}>
                            <div className={styles.featureItem}>
                                <div className={`${styles.featureIcon} ${styles.featureIconBlue}`}>
                                    <i className="fas fa-file-export" />
                                </div>
                                <div className={styles.featureText}>
                                    <div className={styles.featureTitle}>{t('slide15.feat1Title')}</div>
                                    <div className={styles.featureDesc}>{t('slide15.feat1Desc')}</div>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={`${styles.featureIcon} ${styles.featureIconAmber}`}>
                                    <i className="fas fa-calendar-alt" />
                                </div>
                                <div className={styles.featureText}>
                                    <div className={styles.featureTitle}>{t('slide15.feat2Title')}</div>
                                    <div className={styles.featureDesc}>{t('slide15.feat2Desc')}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer text={t('slide15.footer')} />
        </SlideLayout>
    );
}
