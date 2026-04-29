import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { useT } from '../../i18n/useLanguage';
import styles from './Slide06.module.css';

export default function Slide06() {
    const t = useT();
    return (
        <SlideLayout>
            <Header
                title={t('slide06.title')}
                icon="fas fa-download"
                iconColor="#3b82f6"
                subtitle={t('slide06.subtitle')}
            />

            <div className={styles.body}>
                {/* Left: Dashboard Screenshot */}
                <div className={styles.bodyLeft}>
                    <div className={styles.screenshotCard}>
                        <div className={styles.screenshotCardHeader}>
                            <div className={styles.screenshotCardTitle}>
                                <i className={`fas fa-chart-area ${styles.screenshotCardTitleIcon}`} />
                                {t('slide06.screenshotTitle')}
                            </div>
                        </div>
                        <div className={styles.screenshotCardImgWrap}>
                            <img src="./images/slide-6.jpg" alt="Dashboard Export Preview" className={styles.screenshotCardImg} />
                        </div>
                    </div>
                    {/* Workflow */}
                    <div className={styles.workflow}>
                        <div className={styles.workflowStep}>
                            <div className={styles.workflowStepIcon}><i className="fas fa-tachometer-alt" /></div>
                            <span className={styles.workflowStepLabel}>{t('slide06.wfDashboard')}</span>
                        </div>
                        <i className={`fas fa-arrow-right ${styles.workflowArrow}`} />
                        <div className={styles.workflowStep}>
                            <div className={styles.workflowStepIcon}><i className="fas fa-image" /></div>
                            <span className={styles.workflowStepLabel}>{t('slide06.wfExport')}</span>
                        </div>
                        <i className={`fas fa-arrow-right ${styles.workflowArrow}`} />
                        <div className={styles.workflowTargets}>
                            <div className={styles.workflowTarget}>
                                <i className={`fas fa-envelope ${styles.workflowTargetIcon}`} /> {t('slide06.wfEmail')}
                            </div>
                            <div className={styles.workflowTarget}>
                                <i className={`fas fa-file-alt ${styles.workflowTargetIcon}`} /> {t('slide06.wfReport')}
                            </div>
                            <div className={styles.workflowTarget}>
                                <i className={`fas fa-archive ${styles.workflowTargetIcon}`} /> {t('slide06.wfArchive')}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Feature Description */}
                <div className={styles.bodyRight}>
                    <div className={styles.featureCard}>
                        <div className={styles.featureCardHeader}>
                            <div className={styles.featureCardIcon}><i className="fas fa-image" /></div>
                            <div>
                                <div className={styles.featureCardTitle}>{t('slide06.feat1Title')}</div>
                                <div className={styles.featureCardSubtitle}>{t('slide06.feat1Sub')}</div>
                            </div>
                        </div>
                        <div className={styles.featureCardText}>
                            {t('slide06.feat1Text')}
                        </div>
                        <div className={styles.featureCardChecks}>
                            <div className={styles.featureCardCheck}>
                                <i className={`fas fa-check-circle ${styles.featureCardCheckIcon}`} />
                                {t('slide06.feat1Check1')}
                            </div>
                            <div className={styles.featureCardCheck}>
                                <i className={`fas fa-check-circle ${styles.featureCardCheckIcon}`} />
                                {t('slide06.feat1Check2')}
                            </div>
                            <div className={styles.featureCardCheck}>
                                <i className={`fas fa-check-circle ${styles.featureCardCheckIcon}`} />
                                {t('slide06.feat1Check3')}
                            </div>
                        </div>
                    </div>

                    <div className={styles.featureCard}>
                        <div className={styles.usecaseTitle}>
                            <i className={`fas fa-th-large ${styles.usecaseTitleIcon}`} />
                            {t('slide06.usecaseTitle')}
                        </div>
                        <div className={styles.usecaseList}>
                            <div className={`${styles.usecaseItem} ${styles.usecaseItemBlue}`}>
                                <div className={`${styles.usecaseItemIcon} ${styles.usecaseItemIconBlue}`}><i className="fas fa-envelope" /></div>
                                <div>
                                    <div className={styles.usecaseItemTitle}>{t('slide06.usecase1Title')}</div>
                                    <div className={styles.usecaseItemDesc}>{t('slide06.usecase1Desc')}</div>
                                </div>
                            </div>
                            <div className={`${styles.usecaseItem} ${styles.usecaseItemGreen}`}>
                                <div className={`${styles.usecaseItemIcon} ${styles.usecaseItemIconGreen}`}><i className="fas fa-desktop" /></div>
                                <div>
                                    <div className={styles.usecaseItemTitle}>{t('slide06.usecase2Title')}</div>
                                    <div className={styles.usecaseItemDesc}>{t('slide06.usecase2Desc')}</div>
                                </div>
                            </div>
                            <div className={`${styles.usecaseItem} ${styles.usecaseItemPurple}`}>
                                <div className={`${styles.usecaseItemIcon} ${styles.usecaseItemIconPurple}`}><i className="fas fa-folder-open" /></div>
                                <div>
                                    <div className={styles.usecaseItemTitle}>{t('slide06.usecase3Title')}</div>
                                    <div className={styles.usecaseItemDesc}>{t('slide06.usecase3Desc')}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer text={t('slide06.footer')} />
        </SlideLayout>
    );
}
