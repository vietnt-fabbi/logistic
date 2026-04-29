import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import ScreenshotFrame from '../../components/common/ScreenshotFrame';
import { useT } from '../../i18n/useLanguage';
import styles from './Slide19.module.css';

export default function Slide19() {
    const t = useT();
    return (
        <SlideLayout>
            <Header
                title={t('slide19.title')}
                icon="fas fa-barcode"
                iconColor="#ef4444"
                subtitle={t('slide19.subtitle')}
            />

            {/* Risk Callout */}
            <div className={styles.riskCallout}>
                <div className={styles.riskIcon}><i className="fas fa-exclamation-triangle" /></div>
                <div className={styles.riskText}>
                    <strong className={styles.riskLabel}>{t('slide19.riskLabel')}</strong> {t('slide19.riskText')}
                </div>
            </div>

            {/* Body */}
            <div className={styles.body}>
                {/* Screenshot (left) */}
                <ScreenshotFrame
                    src="./images/slide-19 - HS Code Report.jpg"
                    alt="HS Code Report"
                    title={t('slide19.screenshotTitle')}
                    titleIcon="fas fa-table"
                    titleIconColor="#ef4444"
                    flex={3}
                />

                {/* Sidebar (right) */}
                <div className={styles.sidebar}>
                    <div className={styles.sidebarCard}>
                        <div className={styles.sidebarCardTitle}>
                            <i className="fas fa-bolt" style={{ color: '#ef4444' }} />{t('slide19.cardTitle')}
                        </div>
                        <div className={styles.featureList}>
                            <div className={styles.featureItem}>
                                <div className={`${styles.featureIcon} ${styles.featureIconRed}`}>
                                    <i className="fas fa-barcode" />
                                </div>
                                <div className={styles.featureText}>
                                    <div className={styles.featureTitle}>{t('slide19.feat1Title')}</div>
                                    <div className={styles.featureDesc}>{t('slide19.feat1Desc')}</div>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={`${styles.featureIcon} ${styles.featureIconBlue}`}>
                                    <i className="fas fa-eye" />
                                </div>
                                <div className={styles.featureText}>
                                    <div className={styles.featureTitle}>{t('slide19.feat2Title')}</div>
                                    <div className={styles.featureDesc}>{t('slide19.feat2Desc')}</div>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={`${styles.featureIcon} ${styles.featureIconGreen}`}>
                                    <i className="fas fa-file-excel" />
                                </div>
                                <div className={styles.featureText}>
                                    <div className={styles.featureTitle}>{t('slide19.feat3Title')}</div>
                                    <div className={styles.featureDesc}>{t('slide19.feat3Desc')}</div>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={`${styles.featureIcon} ${styles.featureIconAmber}`}>
                                    <i className="fas fa-signal" />
                                </div>
                                <div className={styles.featureText}>
                                    <div className={styles.featureTitle}>{t('slide19.feat4Title')}</div>
                                    <div className={styles.featureDesc}>{t('slide19.feat4Desc')}</div>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={`${styles.featureIcon} ${styles.featureIconPurple}`}>
                                    <i className="fas fa-calendar-alt" />
                                </div>
                                <div className={styles.featureText}>
                                    <div className={styles.featureTitle}>{t('slide19.feat5Title')}</div>
                                    <div className={styles.featureDesc}>{t('slide19.feat5Desc')}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer text={t('slide19.footer')} />
        </SlideLayout>
    );
}
