import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { useT } from '../../i18n/useLanguage';
import styles from './Slide14.module.css';

export default function Slide14() {
    const t = useT();
    return (
        <SlideLayout theme="light">
            <Header
                title={t('slide14.title')}
                icon="fas fa-file-contract"
                iconColor="#3b82f6"
                subtitle={t('slide14.subtitle')}
            />

            {/* Flow: Hệ thống -> Export -> HQ */}
            <div className={styles.flow}>
                <div className={`${styles.flowStep} ${styles.flowStepBlue}`}>
                    <div className={`${styles.flowIcon} ${styles.flowIconBlue}`}>
                        <i className="fas fa-database" />
                    </div>
                    <div className={styles.flowName}>{t('slide14.flow1Name')}</div>
                    <div className={styles.flowDesc}>{t('slide14.flow1Desc')}</div>
                </div>
                <i className={`fas fa-arrow-right ${styles.flowArrow}`} />
                <div className={`${styles.flowStep} ${styles.flowStepGreen}`}>
                    <div className={`${styles.flowIcon} ${styles.flowIconGreen}`}>
                        <i className="fas fa-file-export" />
                    </div>
                    <div className={styles.flowName}>{t('slide14.flow2Name')}</div>
                    <div className={styles.flowDesc}>{t('slide14.flow2Desc')}</div>
                </div>
                <i className={`fas fa-arrow-right ${styles.flowArrow} ${styles.flowArrowGreen}`} />
                <div className={`${styles.flowStep} ${styles.flowStepPurple}`}>
                    <div className={`${styles.flowIcon} ${styles.flowIconPurple}`}>
                        <i className="fas fa-landmark" />
                    </div>
                    <div className={styles.flowName}>{t('slide14.flow3Name')}</div>
                    <div className={styles.flowDesc}>{t('slide14.flow3Desc')}</div>
                </div>
            </div>

            {/* Body */}
            <div className={styles.body}>
                {/* 3 Report Cards */}
                <div className={styles.reportCards}>
                    <div className={`${styles.reportCard} ${styles.reportCardBlue}`}>
                        <div className={styles.reportCardHeader}>
                            <div className={`${styles.reportCardIcon} ${styles.reportCardIconBlue}`}>
                                <i className="fas fa-boxes" />
                            </div>
                            <div>
                                <div className={styles.reportCardName}>{t('slide14.rep1Name')}</div>
                                <div className={styles.reportCardSub}>{t('slide14.rep1Sub')}</div>
                            </div>
                        </div>
                        <div className={styles.reportCardDesc}>{t('slide14.rep1Desc')}</div>
                    </div>
                    <div className={`${styles.reportCard} ${styles.reportCardGreen}`}>
                        <div className={styles.reportCardHeader}>
                            <div className={`${styles.reportCardIcon} ${styles.reportCardIconGreen}`}>
                                <i className="fas fa-cube" />
                            </div>
                            <div>
                                <div className={styles.reportCardName}>{t('slide14.rep2Name')}</div>
                                <div className={styles.reportCardSub}>{t('slide14.rep2Sub')}</div>
                            </div>
                        </div>
                        <div className={styles.reportCardDesc}>{t('slide14.rep2Desc')}</div>
                    </div>
                    <div className={`${styles.reportCard} ${styles.reportCardPurple}`}>
                        <div className={styles.reportCardHeader}>
                            <div className={`${styles.reportCardIcon} ${styles.reportCardIconPurple}`}>
                                <i className="fas fa-clipboard-list" />
                            </div>
                            <div>
                                <div className={styles.reportCardName}>{t('slide14.rep3Name')}</div>
                                <div className={styles.reportCardSub}>{t('slide14.rep3Sub')}</div>
                            </div>
                        </div>
                        <div className={styles.reportCardDesc}>{t('slide14.rep3Desc')}</div>
                    </div>
                </div>

                {/* Time saving + Risk reduction */}
                <div className={styles.bottomRow}>
                    <div className={styles.card}>
                        <div className={styles.cardTitle}>
                            <i className={`fas fa-clock ${styles.iconYellow}`} />
                            {t('slide14.timeTitle')}
                        </div>
                        <div className={styles.timeCompare}>
                            <div className={styles.timeBox}>
                                <div className={`${styles.timeValueWrap} ${styles.timeValueWrapRed}`}>
                                    <div className={`${styles.timeValue} ${styles.timeValueRed}`}>{t('slide14.timeBefore')}</div>
                                </div>
                                <div className={`${styles.timeLabel} ${styles.timeLabelRed}`}>{t('slide14.timeBeforeLabel')}</div>
                            </div>
                            <div className={styles.timeArrow}>
                                <i className="fas fa-arrow-right" />
                                <div className={styles.timeArrowPct}>-99%</div>
                            </div>
                            <div className={styles.timeBox}>
                                <div className={`${styles.timeValueWrap} ${styles.timeValueWrapGreen}`}>
                                    <div className={`${styles.timeValue} ${styles.timeValueGreen}`}>{t('slide14.timeAfter')}</div>
                                </div>
                                <div className={`${styles.timeLabel} ${styles.timeLabelGreen}`}>{t('slide14.timeAfterLabel')}</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardTitle}>
                            <i className={`fas fa-shield-alt ${styles.iconBlue}`} />
                            {t('slide14.riskTitle')}
                        </div>
                        <div className={styles.riskList}>
                            <div className={styles.riskItem}>
                                <i className="fas fa-check-circle" />
                                <span>{t('slide14.risk1')}</span>
                            </div>
                            <div className={styles.riskItem}>
                                <i className="fas fa-check-circle" />
                                <span>{t('slide14.risk2')}</span>
                            </div>
                            <div className={styles.riskItem}>
                                <i className="fas fa-check-circle" />
                                <span>{t('slide14.risk3')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer text={t('slide14.footer')} />
        </SlideLayout>
    );
}
