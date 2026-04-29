import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { useT } from '../../i18n/useLanguage';
import styles from './Slide22.module.css';

export default function Slide22() {
    const t = useT();
    return (
        <SlideLayout>
            <Header
                title={t('slide22.title')}
                icon="fas fa-sitemap"
                iconColor="#3b82f6"
                subtitle={t('slide22.subtitle')}
            />

            {/* Risk callout */}
            <div className={styles.riskCallout}>
                <div className={styles.riskCalloutIcon}><i className="fas fa-exclamation-triangle" /></div>
                <div className={styles.riskCalloutText}>
                    <strong>{t('slide22.riskBold')}</strong> {t('slide22.riskText')}
                </div>
            </div>

            {/* Body */}
            <div className={styles.body}>
                {/* Table */}
                <div className={`${styles.card} ${styles.panelTable}`}>
                    <div className={styles.cardTitle}>
                        <i className="fas fa-table" />{t('slide22.tableTitle')}
                    </div>
                    <div className={styles.screenshotFrame}>
                        <img src="./images/slide-22 - BOM Report.jpg" alt="BOM Report" />
                    </div>
                </div>

                {/* Sidebar */}
                <div className={styles.panelSidebar}>
                    <div className={styles.card}>
                        <div className={styles.cardTitle}>
                            <i className="fas fa-list-check" />{t('slide22.reportTypeTitle')}
                        </div>
                        <div className={styles.reportList}>
                            <div className={styles.reportItem}>
                                <span className={`${styles.reportBadge} ${styles.reportBadgeFg}`}>FG</span>
                                <span className={styles.reportLabel}>{t('slide22.report1')}</span>
                            </div>
                            <div className={styles.reportItem}>
                                <span className={`${styles.reportBadge} ${styles.reportBadgeSemi}`}>Semi</span>
                                <span className={styles.reportLabel}>{t('slide22.report2')}</span>
                            </div>
                            <div className={styles.reportItem}>
                                <span className={`${styles.reportBadge} ${styles.reportBadgeRm}`}>RM</span>
                                <span className={styles.reportLabel}>{t('slide22.report3')}</span>
                            </div>
                            <div className={styles.reportItem}>
                                <span className={`${styles.reportBadge} ${styles.reportBadgeWarn}`}>&lt;1</span>
                                <span className={styles.reportLabel}>{t('slide22.report4')}</span>
                            </div>
                            <div className={styles.reportItem}>
                                <span className={`${styles.reportBadge} ${styles.reportBadgeUnused}`}>ERP</span>
                                <span className={styles.reportLabel}>{t('slide22.report5')}</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardTitle}>
                            <i className="fas fa-bolt" />{t('slide22.cardTitle')}
                        </div>
                        <div className={styles.featureList}>
                            <div className={styles.featureItem}>
                                <div className={`${styles.featureIcon} ${styles.featureIconBlue}`}>
                                    <i className="fas fa-calendar-alt" />
                                </div>
                                <div className={styles.featureText}>
                                    <div className={styles.featureTitle}>{t('slide22.feat1Title')}</div>
                                    <div className={styles.featureDesc}>{t('slide22.feat1Desc')}</div>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={`${styles.featureIcon} ${styles.featureIconGreen}`}>
                                    <i className="fas fa-file-excel" />
                                </div>
                                <div className={styles.featureText}>
                                    <div className={styles.featureTitle}>{t('slide22.feat2Title')}</div>
                                    <div className={styles.featureDesc}>{t('slide22.feat2Desc')}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer text={t('slide22.footer')} />
        </SlideLayout>
    );
}
