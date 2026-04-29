import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { useT } from '../../i18n/useLanguage';
import styles from './Slide21.module.css';

export default function Slide21() {
    const t = useT();
    return (
        <SlideLayout>
            <Header
                title={t('slide21.title')}
                icon="fas fa-dollar-sign"
                iconColor="#9333ea"
                subtitle={t('slide21.subtitle')}
            />

            {/* Risk Callout */}
            <div className={styles.riskCallout}>
                <div className={styles.riskCalloutIcon}><i className="fas fa-exclamation-triangle" /></div>
                <div className={styles.riskCalloutText}>
                    <strong className={styles.riskCalloutLabel}>{t('slide21.riskLabel')}</strong> {t('slide21.riskText')}
                </div>
            </div>

            {/* Body */}
            <div className={styles.body}>
                {/* Table */}
                <div className={styles.tablePanel}>
                    <div className={styles.tablePanelHeader}>
                        <div className={styles.tablePanelTitle}>
                            <i className="fas fa-table" style={{ color: '#9333ea' }} />
                            {t('slide21.tableTitle')}
                        </div>
                    </div>
                    <div className={styles.screenshotFrame}>
                        <img src="./images/slide-21 - Unit Price Report.jpg" alt="Unit Price Report" />
                    </div>
                </div>

                {/* Sidebar — feature description */}
                <div className={styles.sidebar}>
                    <div className={styles.chartPanel}>
                        <div className={styles.chartPanelTitle}>
                            <i className="fas fa-bolt" style={{ color: '#9333ea' }} />
                            {t('slide21.cardTitle')}
                        </div>
                        <div className={styles.featureList}>
                            <div className={styles.featureItem}>
                                <div className={`${styles.featureIcon} ${styles.featureIconPurple}`}>
                                    <i className="fas fa-search-dollar" />
                                </div>
                                <div className={styles.featureText}>
                                    <div className={styles.featureTitle}>{t('slide21.feat1Title')}</div>
                                    <div className={styles.featureDesc}>{t('slide21.feat1Desc')}</div>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={`${styles.featureIcon} ${styles.featureIconBlue}`}>
                                    <i className="fas fa-eye" />
                                </div>
                                <div className={styles.featureText}>
                                    <div className={styles.featureTitle}>{t('slide21.feat2Title')}</div>
                                    <div className={styles.featureDesc}>{t('slide21.feat2Desc')}</div>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={`${styles.featureIcon} ${styles.featureIconGreen}`}>
                                    <i className="fas fa-file-excel" />
                                </div>
                                <div className={styles.featureText}>
                                    <div className={styles.featureTitle}>{t('slide21.feat3Title')}</div>
                                    <div className={styles.featureDesc}>{t('slide21.feat3Desc')}</div>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={`${styles.featureIcon} ${styles.featureIconAmber}`}>
                                    <i className="fas fa-calendar-alt" />
                                </div>
                                <div className={styles.featureText}>
                                    <div className={styles.featureTitle}>{t('slide21.feat4Title')}</div>
                                    <div className={styles.featureDesc}>{t('slide21.feat4Desc')}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer text={t('slide21.footer')} />
        </SlideLayout>
    );
}
