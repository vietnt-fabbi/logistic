import SlideLayout from '../../components/SlideLayout/SlideLayout';
import { useT } from '../../i18n/useLanguage';
import styles from './Slide25.module.css';

export default function Slide25() {
    const t = useT();
    return (
        <SlideLayout theme="dark">
            {/* Header */}
            <div className={styles.slideHeader}>
                <div className={styles.headerBrand}>
                    <img className={styles.headerLogoImg} src="./images/ken-logo.png" alt="Ken Logistics" />
                    <div>
                        <div className={styles.headerLabel}>{t('slide25.brandLabel')}</div>
                        <div className={styles.headerName}>{t('slide25.brandSub')}</div>
                    </div>
                </div>
                <div className={styles.headerTitle}>
                    <span className={styles.gradientText}>{t('slide25.title')}</span>
                </div>
                <div className={styles.headerSubtitle}>
                    {t('slide25.subtitle')}
                </div>
            </div>

            {/* Body */}
            <div className={styles.slideBody}>
                {/* 3 CTA Cards */}
                <div className={styles.ctaGrid}>
                    {/* Demo */}
                    <div className={`${styles.glassCard} ${styles.ctaCard}`}>
                        <div className={`${styles.ctaCardIcon} ${styles.ctaCardIconBlue}`}>
                            <i className="fas fa-desktop" />
                        </div>
                        <div className={styles.ctaCardTitle}>{t('slide25.cta1Title')}</div>
                        <div className={styles.ctaCardDesc}>{t('slide25.cta1Desc')}</div>
                        <div className={`${styles.ctaCardBtn} ${styles.ctaCardBtnBlue}`}>
                            <i className="fas fa-play-circle" /> {t('slide25.cta1Btn')}
                        </div>
                    </div>

                    {/* Pilot */}
                    <div className={`${styles.glassCard} ${styles.ctaCard}`}>
                        <div className={`${styles.ctaCardIcon} ${styles.ctaCardIconGreen}`}>
                            <i className="fas fa-rocket" />
                        </div>
                        <div className={styles.ctaCardTitle}>{t('slide25.cta2Title')}</div>
                        <div className={styles.ctaCardDesc}>{t('slide25.cta2Desc')}</div>
                        <div className={`${styles.ctaCardBtn} ${styles.ctaCardBtnGreen}`}>
                            <i className="fas fa-paper-plane" /> {t('slide25.cta2Btn')}
                        </div>
                    </div>

                    {/* Meeting */}
                    <div className={`${styles.glassCard} ${styles.ctaCard}`}>
                        <div className={`${styles.ctaCardIcon} ${styles.ctaCardIconYellow}`}>
                            <i className="fas fa-handshake" />
                        </div>
                        <div className={styles.ctaCardTitle}>{t('slide25.cta3Title')}</div>
                        <div className={styles.ctaCardDesc}>{t('slide25.cta3Desc')}</div>
                        <div className={`${styles.ctaCardBtn} ${styles.ctaCardBtnYellow}`}>
                            <i className="fas fa-calendar-check" /> {t('slide25.cta3Btn')}
                        </div>
                    </div>
                </div>

                {/* Contact bar */}
                <div className={`${styles.glassCard} ${styles.contactBar}`}>
                    <div className={styles.contactBarInner}>
                        <div className={styles.contactBarItems}>
                            <div className={styles.contactItem}>
                                <div className={`${styles.contactItemIcon} ${styles.contactItemIconBlue}`}>
                                    <i className="fas fa-envelope" />
                                </div>
                                <div>
                                    <div className={styles.contactItemLabel}>{t('slide25.contactEmail')}</div>
                                    <div className={styles.contactItemValue}>bdteam@kenlogis.vn</div>
                                </div>
                            </div>
                            <div className={styles.contactDivider} />
                            <div className={styles.contactItem}>
                                <div className={`${styles.contactItemIcon} ${styles.contactItemIconGreen}`}>
                                    <i className="fas fa-phone-alt" />
                                </div>
                                <div>
                                    <div className={styles.contactItemLabel}>{t('slide25.contactHotline')}</div>
                                    <div className={styles.contactItemValue}>+84 24 3768 0066</div>
                                </div>
                            </div>
                            <div className={styles.contactDivider} />
                            <div className={styles.contactItem}>
                                <div className={`${styles.contactItemIcon} ${styles.contactItemIconYellow}`}>
                                    <i className="fas fa-globe" />
                                </div>
                                <div>
                                    <div className={styles.contactItemLabel}>{t('slide25.contactWebsite')}</div>
                                    <div className={styles.contactItemValue}>https://kenlogis.vn/</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.statusBadge}>
                            <div className={`${styles.statusBadgeDot} ${styles.pulseDot}`} />
                            <span className={styles.statusBadgeText}>{t('slide25.statusReady')}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className={styles.slideFooter}>
                <div className={styles.footerStats}>
                    <div className={styles.footerStat}>
                        <div className={styles.footerStatValue}>500+</div>
                        <div className={styles.footerStatLabel}>{t('slide25.statBusinesses')}</div>
                    </div>
                    <div className={styles.footerStat}>
                        <div className={styles.footerStatValue}>99.9%</div>
                        <div className={styles.footerStatLabel}>{t('slide25.statAccuracy')}</div>
                    </div>
                    <div className={styles.footerStat}>
                        <div className={styles.footerStatValue}>24/7</div>
                        <div className={styles.footerStatLabel}>{t('slide25.statSupport')}</div>
                    </div>
                </div>
                <div className={styles.footerMeta}>
                    <div className={styles.footerMetaItem}>
                        <i className="fas fa-building" />KEN Logistics
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
}
