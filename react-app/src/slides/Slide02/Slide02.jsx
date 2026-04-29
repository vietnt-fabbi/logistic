import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { useT } from '../../i18n/useLanguage';
import styles from './Slide02.module.css';

export default function Slide02() {
    const t = useT();
    return (
        <SlideLayout>
            <Header
                title={t('slide02.title')}
                icon="fas fa-exclamation-triangle"
                iconColor="#ef4444"
                subtitle={t('slide02.subtitle')}
            />

            {/* Body */}
            <div className={styles.body}>
                {/* Left: Pain points */}
                <div className={styles.painList}>
                    <div className={styles.painPoint}>
                        <div className={`${styles.painPointIcon} ${styles.painPointIconRed}`}>
                            <i className="fas fa-exchange-alt" />
                        </div>
                        <div className={styles.painPointBody}>
                            <div className={styles.painPointTop}>
                                <span className={styles.painPointName}>{t('slide02.pain1Name')}</span>
                                <span className={`${styles.statusBadge} ${styles.statusBadgeError}`}>
                                    <i className="fas fa-times-circle" /> {t('slide02.pain1Badge')}
                                </span>
                            </div>
                            <div className={styles.painPointDesc}>{t('slide02.pain1Desc')}</div>
                        </div>
                    </div>

                    <div className={styles.painPoint}>
                        <div className={`${styles.painPointIcon} ${styles.painPointIconAmber}`}>
                            <i className="fas fa-file-alt" />
                        </div>
                        <div className={styles.painPointBody}>
                            <div className={styles.painPointTop}>
                                <span className={styles.painPointName}>{t('slide02.pain2Name')}</span>
                                <span className={`${styles.statusBadge} ${styles.statusBadgeWarning}`}>
                                    <i className="fas fa-clock" /> {t('slide02.pain2Badge')}
                                </span>
                            </div>
                            <div className={styles.painPointDesc}>{t('slide02.pain2Desc')}</div>
                        </div>
                    </div>

                    <div className={styles.painPoint}>
                        <div className={`${styles.painPointIcon} ${styles.painPointIconPurple}`}>
                            <i className="fas fa-search" />
                        </div>
                        <div className={styles.painPointBody}>
                            <div className={styles.painPointTop}>
                                <span className={styles.painPointName}>{t('slide02.pain3Name')}</span>
                                <span className={`${styles.statusBadge} ${styles.statusBadgeWarning}`}>
                                    <i className="fas fa-exclamation-triangle" /> {t('slide02.pain3Badge')}
                                </span>
                            </div>
                            <div className={styles.painPointDesc}>{t('slide02.pain3Desc')}</div>
                        </div>
                    </div>

                    <div className={styles.painPoint}>
                        <div className={`${styles.painPointIcon} ${styles.painPointIconBlue}`}>
                            <i className="fas fa-calculator" />
                        </div>
                        <div className={styles.painPointBody}>
                            <div className={styles.painPointTop}>
                                <span className={styles.painPointName}>{t('slide02.pain4Name')}</span>
                                <span className={`${styles.statusBadge} ${styles.statusBadgeWarning}`}>
                                    <i className="fas fa-sync-alt" /> {t('slide02.pain4Badge')}
                                </span>
                            </div>
                            <div className={styles.painPointDesc}>{t('slide02.pain4Desc')}</div>
                        </div>
                    </div>
                </div>

                {/* Right: Workflow diagram */}
                <div className={styles.workflow}>
                    <div className={styles.workflowTitle}>
                        <i className="fas fa-project-diagram" />{t('slide02.wfTitle')}
                    </div>

                    <div className={styles.workflowDiagram}>
                        {/* Row 1 */}
                        <div className={`${styles.wfStep} ${styles.wfStepDefault}`}>
                            <div className={`${styles.wfStepIcon} ${styles.wfStepIconBlue}`}><i className="fas fa-database" /></div>
                            <div>
                                <div className={styles.wfStepLabel}>ERP Data</div>
                                <div className={styles.wfStepSub}>{t('slide02.wfErpData')}</div>
                            </div>
                        </div>
                        <div className={`${styles.wfStep} ${styles.wfStepWarning}`}>
                            <div className={`${styles.wfStepIcon} ${styles.wfStepIconAmber}`}><i className="fas fa-file-excel" /></div>
                            <div>
                                <div className={styles.wfStepLabel}>Excel</div>
                                <div className={styles.wfStepSub}>{t('slide02.wfExcel')}</div>
                            </div>
                        </div>

                        {/* Row 2: arrows */}
                        <div className={styles.wfArrow}><i className="fas fa-arrow-down" /></div>
                        <div className={styles.wfArrow}><i className="fas fa-arrow-down" /></div>

                        {/* Row 3 */}
                        <div className={`${styles.wfStep} ${styles.wfStepDefault}`}>
                            <div className={`${styles.wfStepIcon} ${styles.wfStepIconBlue}`}><i className="fas fa-file-contract" /></div>
                            <div>
                                <div className={styles.wfStepLabel}>{t('slide02.wfReport')}</div>
                                <div className={styles.wfStepSub}>{t('slide02.wfReportSub')}</div>
                            </div>
                        </div>
                        <div className={`${styles.wfStep} ${styles.wfStepError}`}>
                            <div className={`${styles.wfStepIcon} ${styles.wfStepIconRed}`}><i className="fas fa-exclamation-triangle" /></div>
                            <div>
                                <div className={styles.wfStepLabel}>{t('slide02.wfAnomaly')}</div>
                                <div className={styles.wfStepSub}>{t('slide02.wfAnomalySub')}</div>
                            </div>
                        </div>

                        {/* Row 4: arrows */}
                        <div className={styles.wfArrow}><i className="fas fa-arrow-down" /></div>
                        <div className={styles.wfArrow}><i className="fas fa-arrow-down" /></div>

                        {/* Row 5: completion */}
                        <div className={`${styles.wfStep} ${styles.wfStepSuccess}`}>
                            <div className={`${styles.wfStepIcon} ${styles.wfStepIconGreen}`}><i className="fas fa-check" /></div>
                            <div>
                                <div className={styles.wfStepLabel}>{t('slide02.wfDone')}</div>
                                <div className={styles.wfStepSub}>{t('slide02.wfDoneSub')}</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.workflowLegend}>
                        <div className={styles.legendItem}>
                            <div className={`${styles.legendItemDot} ${styles.legendItemDotRed}`} />
                            <span className={styles.legendItemText}>{t('slide02.legendPain')}</span>
                        </div>
                        <div className={styles.legendItem}>
                            <div className={`${styles.legendItemDot} ${styles.legendItemDotAmber}`} />
                            <span className={styles.legendItemText}>{t('slide02.legendWarn')}</span>
                        </div>
                        <div className={styles.legendItem}>
                            <div className={`${styles.legendItemDot} ${styles.legendItemDotBlue}`} />
                            <span className={styles.legendItemText}>{t('slide02.legendNormal')}</span>
                        </div>
                    </div>
                </div>
            </div>

            <Footer text={t('slide02.footer')} />
        </SlideLayout>
    );
}
