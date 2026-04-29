import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { useT } from '../../i18n/useLanguage';
import styles from './Slide12.module.css';

export default function Slide12() {
    const t = useT();
    return (
        <SlideLayout theme="light">
            <Header
                title={t('slide12.title')}
                icon="fas fa-calculator"
                iconColor="#3b82f6"
                subtitle={t('slide12.subtitle')}
            />

            {/* Flow: ERP Daily -> Engine -> Actual BOM */}
            <div className={styles.flow}>
                <div className={`${styles.flowStep} ${styles.flowStepBlue}`}>
                    <div className={`${styles.flowIcon} ${styles.flowIconBlue}`}>
                        <i className="fas fa-calendar-day" />
                    </div>
                    <div className={styles.flowName}>{t('slide12.flow1Name')}</div>
                    <div className={styles.flowDesc}>{t('slide12.flow1Desc')}</div>
                    <span className={`${styles.flowTag} ${styles.flowTagBlue}`}>{t('slide12.flow1Tag')}</span>
                </div>
                <div className={styles.flowArrow}><i className="fas fa-chevron-right" /></div>
                <div className={`${styles.flowStep} ${styles.flowStepGreen} ${styles.flowStepEngine}`}>
                    <div className={`${styles.flowIcon} ${styles.flowIconGreen}`}>
                        <i className="fas fa-cogs" />
                    </div>
                    <div className={styles.flowName}>{t('slide12.flow2Name')}</div>
                    <div className={styles.flowDesc}>{t('slide12.flow2Desc')}</div>
                    <span className={`${styles.flowTag} ${styles.flowTagGreen}`}>{t('slide12.flow2Tag')}</span>
                </div>
                <div className={styles.flowArrow}><i className="fas fa-chevron-right" /></div>
                <div className={`${styles.flowStep} ${styles.flowStepPurple}`}>
                    <div className={`${styles.flowIcon} ${styles.flowIconPurple}`}>
                        <i className="fas fa-clipboard-check" />
                    </div>
                    <div className={styles.flowName}>{t('slide12.flow3Name')}</div>
                    <div className={styles.flowDesc}>{t('slide12.flow3Desc')}</div>
                    <span className={`${styles.flowTag} ${styles.flowTagPurple}`}>{t('slide12.flow3Tag')}</span>
                </div>
            </div>

            {/* Notifications + Benefits */}
            <div className={styles.body}>
                {/* Notifications */}
                <div className={styles.notifications}>
                    <div className={styles.sectionTitle}>
                        <i className={`fas fa-bell ${styles.iconYellow}`} />
                        {t('slide12.notifSectionTitle')}
                    </div>
                    <div className={`${styles.notif} ${styles.notifSuccess}`}>
                        <div className={`${styles.notifIcon} ${styles.notifIconSuccess}`}>
                            <i className="fas fa-check-circle" />
                        </div>
                        <div>
                            <div className={styles.notifTitle}>{t('slide12.notifSuccessTitle')}</div>
                            <div className={styles.notifDesc}>{t('slide12.notifSuccessDesc')}</div>
                            <div className={styles.notifMeta}>{t('slide12.notifSuccessMeta')}</div>
                        </div>
                    </div>
                    <div className={`${styles.notif} ${styles.notifWarning}`}>
                        <div className={`${styles.notifIcon} ${styles.notifIconWarning}`}>
                            <i className="fas fa-exclamation-triangle" />
                        </div>
                        <div>
                            <div className={styles.notifTitle}>{t('slide12.notifWarnTitle')}</div>
                            <div className={styles.notifDesc}>{t('slide12.notifWarnDesc')}</div>
                            <div className={styles.notifMeta}>{t('slide12.notifWarnMeta')}</div>
                        </div>
                    </div>
                </div>

                {/* Benefits */}
                <div className={styles.benefits}>
                    <div className={styles.benefit}>
                        <div className={`${styles.benefitIcon} ${styles.benefitIconBlue}`}>
                            <i className="fas fa-ban" />
                        </div>
                        <div>
                            <div className={styles.benefitTitle}>{t('slide12.ben1Title')}</div>
                            <div className={styles.benefitDesc}>{t('slide12.ben1Desc')}</div>
                        </div>
                    </div>
                    <div className={styles.benefit}>
                        <div className={`${styles.benefitIcon} ${styles.benefitIconGreen}`}>
                            <i className="fas fa-bullseye" />
                        </div>
                        <div>
                            <div className={styles.benefitTitle}>{t('slide12.ben2Title')}</div>
                            <div className={styles.benefitDesc}>{t('slide12.ben2Desc')}</div>
                        </div>
                    </div>
                    <div className={styles.benefit}>
                        <div className={`${styles.benefitIcon} ${styles.benefitIconPurple}`}>
                            <i className="fas fa-link" />
                        </div>
                        <div>
                            <div className={styles.benefitTitle}>{t('slide12.ben3Title')}</div>
                            <div className={styles.benefitDesc}>{t('slide12.ben3Desc')}</div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer text={t('slide12.footer')} />
        </SlideLayout>
    );
}
