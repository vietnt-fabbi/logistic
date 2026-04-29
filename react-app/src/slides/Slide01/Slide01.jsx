import SlideLayout from '../../components/SlideLayout/SlideLayout';
import { useT } from '../../i18n/useLanguage';
import styles from './Slide01.module.css';

export default function Slide01() {
    const t = useT();
    return (
        <SlideLayout theme="dark">
            <img className={styles.bgImage} src="./images/slide-1 - bg.jpg" alt="Container Port" />
            <div className={styles.overlay} />

            <div className={styles.content}>
                {/* Body */}
                <div className={styles.body}>
                    {/* Left: Hero */}
                    <div className={styles.hero}>
                        <div className={styles.heroBadge}>
                            <img className={styles.heroBadgeLogo} src="./images/ken-logo.png" alt="Ken Logistics" />
                            <div>
                                <div className={styles.heroBadgeLabel}>{t('slide01.brandLabel')}</div>
                                <div className={styles.heroBadgeSublabel}>{t('slide01.brandSub')}</div>
                            </div>
                        </div>

                        <div className={styles.heroTitle}>
                            <span className={styles.gradientText}>{t('slide01.heroTitle1')}</span><br />
                            <span className={styles.heroTitleSub}>{t('slide01.heroTitle2')}</span>
                        </div>

                        <div className={styles.heroFeatures}>
                            <i className="fas fa-check-circle" />{t('slide01.feature1')}<br />
                            <i className="fas fa-check-circle" />{t('slide01.feature2')}
                        </div>

                        <div className={styles.heroKpis}>
                            <div className={styles.kpiCard}>
                                <i className={`fas fa-robot ${styles.kpiCardIcon}`} />
                                <div>
                                    <div className={styles.kpiCardLabel}>{t('slide01.kpi1Label')}</div>
                                    <div className={styles.kpiCardValue}>100%</div>
                                </div>
                            </div>
                            <div className={`${styles.kpiCard} ${styles.kpiCardGreen}`}>
                                <i className={`fas fa-clock ${styles.kpiCardIcon}`} />
                                <div>
                                    <div className={styles.kpiCardLabel}>{t('slide01.kpi2Label')}</div>
                                    <div className={styles.kpiCardValue}>80%</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Glass card */}
                    <div className={styles.painCard}>
                        <div className={styles.painCardHeader}>
                            <div className={styles.painCardHeaderIcon}>
                                <i className="fas fa-exclamation-triangle" />
                            </div>
                            <div>
                                <div className={styles.painCardHeaderTitle}>{t('slide01.painCardTitle')}</div>
                                <div className={styles.painCardHeaderSub}>{t('slide01.painCardSub')}</div>
                            </div>
                        </div>
                        <div className={styles.painCardList}>
                            <div className={styles.painCardItem}>
                                <div className={`${styles.painCardDot} ${styles.painCardDotRed}`} />
                                <span className={styles.painCardText}>{t('slide01.pain1')}</span>
                            </div>
                            <div className={styles.painCardItem}>
                                <div className={`${styles.painCardDot} ${styles.painCardDotOrange}`} />
                                <span className={styles.painCardText}>{t('slide01.pain2')}</span>
                            </div>
                            <div className={styles.painCardItem}>
                                <div className={`${styles.painCardDot} ${styles.painCardDotPurple}`} />
                                <span className={styles.painCardText}>{t('slide01.pain3')}</span>
                            </div>
                            <div className={styles.painCardItem}>
                                <div className={`${styles.painCardDot} ${styles.painCardDotBlue}`} />
                                <span className={styles.painCardText}>{t('slide01.pain4')}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className={styles.footer}>
                    <div className={styles.stats}>
                        <div className={styles.statsItem}>
                            <div className={styles.statsValue}>500+</div>
                            <div className={styles.statsLabel}>{t('slide01.statBusinesses')}</div>
                        </div>
                        <div className={styles.statsItem}>
                            <div className={styles.statsValue}>99.9%</div>
                            <div className={styles.statsLabel}>{t('slide01.statAccuracy')}</div>
                        </div>
                        <div className={styles.statsItem}>
                            <div className={styles.statsValue}>24/7</div>
                            <div className={styles.statsLabel}>{t('slide01.statSupport')}</div>
                        </div>
                    </div>
                    <div className={styles.meta}>
                        <div className={styles.metaItem}>
                            <i className="fas fa-building" />KEN Logistics
                        </div>
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
}
