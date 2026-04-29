import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import ScreenshotFrame from '../../components/common/ScreenshotFrame';
import { useT } from '../../i18n/useLanguage';
import styles from './Slide20.module.css';

export default function Slide20() {
    const t = useT();
    return (
        <SlideLayout>
            <Header
                title={t('slide20.title')}
                icon="fas fa-ruler"
                iconColor="#f59e0b"
                subtitle={t('slide20.subtitle')}
            />

            {/* Risk Callout */}
            <div className={styles.riskCallout}>
                <div className={styles.riskIcon}><i className="fas fa-exclamation-triangle" /></div>
                <div className={styles.riskText}>
                    <strong className={styles.riskLabel}>{t('slide20.riskLabel')}</strong> {t('slide20.riskText')}
                </div>
            </div>

            {/* Body: sidebar left | screenshot right */}
            <div className={styles.body}>
                {/* Sidebar (left) */}
                <div className={styles.sidebar}>
                    <div className={styles.sidebarCard}>
                        <div className={styles.sidebarCardTitle}>
                            <i className="fas fa-bolt" style={{ color: '#f59e0b' }} />{t('slide20.cardTitle')}
                        </div>
                        <div className={styles.featureList}>
                            <div className={styles.featureItem}>
                                <div className={`${styles.featureIcon} ${styles.featureIconAmber}`}>
                                    <i className="fas fa-ruler" />
                                </div>
                                <div className={styles.featureText}>
                                    <div className={styles.featureTitle}>{t('slide20.feat1Title')}</div>
                                    <div className={styles.featureDesc}>{t('slide20.feat1Desc')}</div>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={`${styles.featureIcon} ${styles.featureIconBlue}`}>
                                    <i className="fas fa-eye" />
                                </div>
                                <div className={styles.featureText}>
                                    <div className={styles.featureTitle}>{t('slide20.feat2Title')}</div>
                                    <div className={styles.featureDesc}>{t('slide20.feat2Desc')}</div>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={`${styles.featureIcon} ${styles.featureIconGreen}`}>
                                    <i className="fas fa-file-excel" />
                                </div>
                                <div className={styles.featureText}>
                                    <div className={styles.featureTitle}>{t('slide20.feat3Title')}</div>
                                    <div className={styles.featureDesc}>{t('slide20.feat3Desc')}</div>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={`${styles.featureIcon} ${styles.featureIconRed}`}>
                                    <i className="fas fa-signal" />
                                </div>
                                <div className={styles.featureText}>
                                    <div className={styles.featureTitle}>{t('slide20.feat4Title')}</div>
                                    <div className={styles.featureDesc}>{t('slide20.feat4Desc')}</div>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={`${styles.featureIcon} ${styles.featureIconPurple}`}>
                                    <i className="fas fa-calendar-alt" />
                                </div>
                                <div className={styles.featureText}>
                                    <div className={styles.featureTitle}>{t('slide20.feat5Title')}</div>
                                    <div className={styles.featureDesc}>{t('slide20.feat5Desc')}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Screenshot (right) */}
                <ScreenshotFrame
                    src="./images/slide-20 - Unit Report.jpg"
                    alt="Unit Report"
                    title={t('slide20.screenshotTitle')}
                    titleIcon="fas fa-table"
                    titleIconColor="#f59e0b"
                    flex={3}
                />
            </div>

            <Footer text={t('slide20.footer')} />
        </SlideLayout>
    );
}
