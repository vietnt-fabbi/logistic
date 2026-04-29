import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { useT } from '../../i18n/useLanguage';
import styles from './Slide08b.module.css';

export default function Slide08b() {
    const t = useT();
    return (
        <SlideLayout>
            <Header
                title={t('slide08b.title')}
                icon="fas fa-project-diagram"
                iconColor="#3b82f6"
                subtitle={t('slide08b.subtitle')}
            />

            <div className={styles.body}>
                <div className={styles.flowLabel}>
                    <i className={`fas fa-project-diagram ${styles.iconBlue} ${styles.iconSm}`} />
                    <span className={styles.flowLabelText}>{t('slide08b.flowLabel')}</span>
                </div>

                <div className={styles.stepsGrid}>
                    <div className={styles.stepCard}>
                        <div className={`${styles.stepNum} ${styles.stepNumBlue}`}>1</div>
                        <div className={styles.stepCardImg}>
                            <img src="./images/slide-8.2 - upload file.jpg" alt="Upload File" />
                        </div>
                        <div className={styles.stepCardBody}>
                            <div className={styles.stepCardTitle}>{t('slide08b.step1Title')}</div>
                            <div className={styles.stepCardDesc}>{t('slide08b.step1Desc')}</div>
                        </div>
                    </div>
                    <div className={styles.stepCard}>
                        <div className={`${styles.stepNum} ${styles.stepNumGreen}`}>2</div>
                        <div className={styles.stepCardImg}>
                            <img src="./images/slide-8.3 - mapping fields.jpg" alt="Mapping Fields" />
                        </div>
                        <div className={styles.stepCardBody}>
                            <div className={styles.stepCardTitle}>{t('slide08b.step2Title')}</div>
                            <div className={styles.stepCardDesc}>{t('slide08b.step2Desc')}</div>
                        </div>
                    </div>
                    <div className={styles.stepCard}>
                        <div className={`${styles.stepNum} ${styles.stepNumAmber}`}>3</div>
                        <div className={styles.stepCardImg}>
                            <img src="./images/slide-8.4 - preview.jpg" alt="Preview Data" />
                        </div>
                        <div className={styles.stepCardBody}>
                            <div className={styles.stepCardTitle}>{t('slide08b.step3Title')}</div>
                            <div className={styles.stepCardDesc}>{t('slide08b.step3Desc')}</div>
                        </div>
                    </div>
                    <div className={styles.stepCard}>
                        <div className={`${styles.stepNum} ${styles.stepNumPurple}`}>4</div>
                        <div className={styles.stepCardImg}>
                            <img src="./images/slide-8.5 - file history.jpg" alt="File History" />
                        </div>
                        <div className={styles.stepCardBody}>
                            <div className={styles.stepCardTitle}>{t('slide08b.step4Title')}</div>
                            <div className={styles.stepCardDesc}>{t('slide08b.step4Desc')}</div>
                        </div>
                    </div>
                </div>

                <div className={styles.flowBar}>
                    <div className={styles.flowBarStep}>
                        <div className={`${styles.flowBarCircle} ${styles.bgBlue}`}>
                            <span className={styles.flowBarCircleText}>1</span>
                        </div>
                        <span className={styles.flowBarLabel}>{t('slide08b.bar1')}</span>
                    </div>
                    <i className={`fas fa-chevron-right ${styles.flowBarArrow}`} />
                    <div className={styles.flowBarStep}>
                        <div className={`${styles.flowBarCircle} ${styles.bgGreen}`}>
                            <span className={styles.flowBarCircleText}>2</span>
                        </div>
                        <span className={styles.flowBarLabel}>{t('slide08b.bar2')}</span>
                    </div>
                    <i className={`fas fa-chevron-right ${styles.flowBarArrow}`} />
                    <div className={styles.flowBarStep}>
                        <div className={`${styles.flowBarCircle} ${styles.bgAmber}`}>
                            <span className={styles.flowBarCircleText}>3</span>
                        </div>
                        <span className={styles.flowBarLabel}>{t('slide08b.bar3')}</span>
                    </div>
                    <i className={`fas fa-chevron-right ${styles.flowBarArrow}`} />
                    <div className={styles.flowBarStep}>
                        <div className={`${styles.flowBarCircle} ${styles.bgPurple}`}>
                            <span className={styles.flowBarCircleText}>4</span>
                        </div>
                        <span className={styles.flowBarLabel}>{t('slide08b.bar4')}</span>
                    </div>
                </div>
            </div>

            <Footer text={t('slide08b.footer')} />
        </SlideLayout>
    );
}
