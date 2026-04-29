import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { useT } from '../../i18n/useLanguage';
import styles from './Slide07.module.css';

export default function Slide07() {
    const t = useT();
    return (
        <SlideLayout>
            <Header
                title={t('slide07.title')}
                icon="fas fa-upload"
                iconColor="#3b82f6"
                subtitle={t('slide07.subtitle')}
            />

            <div className={styles.body}>
                {/* Benefits Row */}
                <div className={styles.benefits}>
                    <div className={styles.benefitCard}>
                        <div className={`${styles.benefitCardIcon} ${styles.benefitCardIconBlue}`}>
                            <i className={`fas fa-cloud-upload-alt ${styles.iconBlue} ${styles.iconLg}`} />
                        </div>
                        <div className={styles.benefitCardTitle}>{t('slide07.ben1Title')}</div>
                        <div className={styles.benefitCardDesc}>{t('slide07.ben1Desc')}</div>
                    </div>
                    <div className={styles.benefitCard}>
                        <div className={`${styles.benefitCardIcon} ${styles.benefitCardIconGreen}`}>
                            <i className={`fas fa-history ${styles.iconGreen} ${styles.iconLg}`} />
                        </div>
                        <div className={styles.benefitCardTitle}>{t('slide07.ben2Title')}</div>
                        <div className={styles.benefitCardDesc}>{t('slide07.ben2Desc')}</div>
                    </div>
                    <div className={styles.benefitCard}>
                        <div className={`${styles.benefitCardIcon} ${styles.benefitCardIconPurple}`}>
                            <i className={`fas fa-random ${styles.iconPurple} ${styles.iconLg}`} />
                        </div>
                        <div className={styles.benefitCardTitle}>{t('slide07.ben3Title')}</div>
                        <div className={styles.benefitCardDesc}>{t('slide07.ben3Desc')}</div>
                    </div>
                </div>

                {/* Flow Diagram */}
                <div className={styles.flowPanel}>
                    <div className={styles.flowPanelTitle}>
                        <i className={`fas fa-project-diagram ${styles.iconBlue}`} />
                        {t('slide07.flowTitle')}
                    </div>
                    <div className={styles.flowSteps}>
                        {/* Step 1 */}
                        <div className={`${styles.flowStep} ${styles.flowStepBlue}`}>
                            <div className={`${styles.flowStepNum} ${styles.flowStepNumBlue}`}>1</div>
                            <div className={`${styles.flowStepIcon} ${styles.flowStepIconBlue}`}>
                                <i className={`fas fa-file-upload ${styles.iconBlue} ${styles.iconMd}`} />
                            </div>
                            <div className={styles.flowStepTitle}>{t('slide07.step1Title')}</div>
                            <div className={styles.flowStepDesc}>{t('slide07.step1Desc')}</div>
                        </div>
                        {/* Arrow */}
                        <div className={styles.flowArrow}>
                            <div className={`${styles.flowArrowLine} ${styles.flowArrowLineBlue}`} />
                            <i className={`fas fa-chevron-right ${styles.iconBlue} ${styles.iconSm}`} />
                        </div>
                        {/* Step 2 */}
                        <div className={`${styles.flowStep} ${styles.flowStepGreen}`}>
                            <div className={`${styles.flowStepNum} ${styles.flowStepNumGreen}`}>2</div>
                            <div className={`${styles.flowStepIcon} ${styles.flowStepIconGreen}`}>
                                <i className={`fas fa-arrows-alt-h ${styles.iconGreen} ${styles.iconMd}`} />
                            </div>
                            <div className={styles.flowStepTitle}>{t('slide07.step2Title')}</div>
                            <div className={styles.flowStepDesc}>{t('slide07.step2Desc')}</div>
                        </div>
                        {/* Arrow */}
                        <div className={styles.flowArrow}>
                            <div className={`${styles.flowArrowLine} ${styles.flowArrowLineGreen}`} />
                            <i className={`fas fa-chevron-right ${styles.iconGreen} ${styles.iconSm}`} />
                        </div>
                        {/* Step 3 */}
                        <div className={`${styles.flowStep} ${styles.flowStepPurple}`}>
                            <div className={`${styles.flowStepNum} ${styles.flowStepNumPurple}`}>3</div>
                            <div className={`${styles.flowStepIcon} ${styles.flowStepIconPurple}`}>
                                <i className={`fas fa-check-circle ${styles.iconPurple} ${styles.iconMd}`} />
                            </div>
                            <div className={styles.flowStepTitle}>{t('slide07.step3Title')}</div>
                            <div className={styles.flowStepDesc}>{t('slide07.step3Desc')}</div>
                        </div>
                        {/* Arrow */}
                        <div className={styles.flowArrow}>
                            <div className={`${styles.flowArrowLine} ${styles.flowArrowLinePurple}`} />
                            <i className={`fas fa-chevron-right ${styles.iconPurple} ${styles.iconSm}`} />
                        </div>
                        {/* Step 4 */}
                        <div className={`${styles.flowStep} ${styles.flowStepAmber}`}>
                            <div className={`${styles.flowStepNum} ${styles.flowStepNumAmber}`}>4</div>
                            <div className={`${styles.flowStepIcon} ${styles.flowStepIconAmber}`}>
                                <i className={`fas fa-database ${styles.iconAmber} ${styles.iconMd}`} />
                            </div>
                            <div className={styles.flowStepTitle}>{t('slide07.step4Title')}</div>
                            <div className={styles.flowStepDesc}>{t('slide07.step4Desc')}</div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer text={t('slide07.footer')} />
        </SlideLayout>
    );
}
