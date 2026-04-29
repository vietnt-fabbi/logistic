import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { useT } from '../../i18n/useLanguage';
import styles from './Slide23.module.css';

export default function Slide23() {
    const t = useT();
    return (
        <SlideLayout>
            <Header
                title={t('slide23.title')}
                icon="fas fa-industry"
                iconColor="#ea580c"
                subtitle={t('slide23.subtitle')}
            />

            {/* Risk callout */}
            <div className={styles.riskCallout}>
                <div className={styles.riskCalloutIcon}><i className="fas fa-exclamation-triangle" /></div>
                <div className={styles.riskCalloutText}>
                    <strong>{t('slide23.riskBold')}</strong> {t('slide23.riskText')}
                </div>
            </div>

            {/* Body */}
            <div className={styles.body}>
                {/* Table */}
                <div className={`${styles.card} ${styles.panelTable}`}>
                    <div className={styles.cardTitle}>
                        <i className="fas fa-table" />{t('slide23.tableTitle')}
                    </div>
                    <div className={styles.screenshotFrame}>
                        <img src="./images/slide-23 - Production Issue.jpg" alt="Production Issue" />
                    </div>
                </div>

                {/* Sidebar */}
                <div className={styles.panelSidebar}>
                    <div className={styles.card}>
                        <div className={styles.cardTitle}>
                            <i className="fas fa-bolt" />{t('slide23.cardTitle')}
                        </div>
                        <div className={styles.featureList}>
                            <div className={styles.featureItem}>
                                <div className={`${styles.featureIcon} ${styles.featureIconOrange}`}>
                                    <i className="fas fa-balance-scale" />
                                </div>
                                <div className={styles.featureText}>
                                    <div className={styles.featureTitle}>{t('slide23.feat1Title')}</div>
                                    <div className={styles.featureDesc}>{t('slide23.feat1Desc')}</div>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={`${styles.featureIcon} ${styles.featureIconBlue}`}>
                                    <i className="fas fa-eye" />
                                </div>
                                <div className={styles.featureText}>
                                    <div className={styles.featureTitle}>{t('slide23.feat2Title')}</div>
                                    <div className={styles.featureDesc}>{t('slide23.feat2Desc')}</div>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={`${styles.featureIcon} ${styles.featureIconGreen}`}>
                                    <i className="fas fa-file-excel" />
                                </div>
                                <div className={styles.featureText}>
                                    <div className={styles.featureTitle}>{t('slide23.feat3Title')}</div>
                                    <div className={styles.featureDesc}>{t('slide23.feat3Desc')}</div>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={`${styles.featureIcon} ${styles.featureIconPurple}`}>
                                    <i className="fas fa-calendar-alt" />
                                </div>
                                <div className={styles.featureText}>
                                    <div className={styles.featureTitle}>{t('slide23.feat4Title')}</div>
                                    <div className={styles.featureDesc}>{t('slide23.feat4Desc')}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer text={t('slide23.footer')} />
        </SlideLayout>
    );
}
