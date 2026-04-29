import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import ScreenshotFrame from '../../components/common/ScreenshotFrame';
import { useT } from '../../i18n/useLanguage';
import styles from './Slide09.module.css';

export default function Slide09() {
    const t = useT();
    return (
        <SlideLayout>
            <Header
                title={t('slide09.title')}
                icon="fas fa-calendar-day"
                iconColor="#3b82f6"
                subtitle={t('slide09.subtitle')}
            />

            {/* Body */}
            <div className={styles.body}>
                {/* Left: Main Screenshot */}
                <div className={styles.contentLeft}>
                    <ScreenshotFrame
                        src="./images/slide-9.1 - list erp daily.jpg"
                        alt="List ERP Daily"
                        title={t('slide09.screenshotTitle')}
                        titleIcon="fas fa-list"
                        titleIconColor="#3b82f6"
                    />
                    <div className={styles.benefitCallout}>
                        <div className={styles.benefitCalloutIcon}>
                            <i className="fas fa-lightbulb" />
                        </div>
                        <div className={styles.benefitCalloutText}>
                            <strong>{t('slide09.calloutBold')}</strong> — {t('slide09.calloutText')}
                        </div>
                    </div>
                </div>

                {/* Right: Filter + Features */}
                <div className={styles.contentRight}>
                    {/* Filter Screenshot */}
                    <div className={styles.filterPanel}>
                        <div className={styles.filterPanelHeader}>
                            <div className={styles.filterPanelTitle}>
                                <i className={`fas fa-filter ${styles.iconAmber}`} />
                                {t('slide09.filterPanelTitle')}
                            </div>
                        </div>
                        <div className={styles.filterPanelImg}>
                            <img src="./images/slide-9.2 - filter.jpg" alt="Filter" />
                        </div>
                    </div>

                    {/* Filter Features */}
                    <div className={styles.infoCard}>
                        <div className={styles.infoCardTitle}>
                            <i className={`fas fa-search ${styles.iconBlue} ${styles.iconMd}`} />
                            {t('slide09.infoCard1Title')}
                        </div>
                        <div className={styles.infoCardList}>
                            <div className={styles.infoCardItem}>
                                <i className={`fas fa-check ${styles.iconGreen} ${styles.iconXs}`} />
                                {t('slide09.infoCard1Item1')}
                            </div>
                            <div className={styles.infoCardItem}>
                                <i className={`fas fa-check ${styles.iconGreen} ${styles.iconXs}`} />
                                {t('slide09.infoCard1Item2')}
                            </div>
                            <div className={styles.infoCardItem}>
                                <i className={`fas fa-check ${styles.iconGreen} ${styles.iconXs}`} />
                                {t('slide09.infoCard1Item3')}
                            </div>
                            <div className={styles.infoCardItem}>
                                <i className={`fas fa-check ${styles.iconGreen} ${styles.iconXs}`} />
                                {t('slide09.infoCard1Item4')}
                            </div>
                        </div>
                    </div>

                    {/* Tab Benefits */}
                    <div className={styles.infoCard}>
                        <div className={styles.infoCardTitle}>
                            <i className={`fas fa-layer-group ${styles.iconPurple} ${styles.iconMd}`} />
                            {t('slide09.infoCard2Title')}
                        </div>
                        <div className={styles.infoCardList}>
                            <div className={styles.infoCardItem}>
                                <i className={`fas fa-check ${styles.iconGreen} ${styles.iconXs}`} />
                                {t('slide09.infoCard2Item1')}
                            </div>
                            <div className={styles.infoCardItem}>
                                <i className={`fas fa-check ${styles.iconGreen} ${styles.iconXs}`} />
                                {t('slide09.infoCard2Item2')}
                            </div>
                            <div className={styles.infoCardItem}>
                                <i className={`fas fa-check ${styles.iconGreen} ${styles.iconXs}`} />
                                {t('slide09.infoCard2Item3')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer text={t('slide09.footer')} />
        </SlideLayout>
    );
}
