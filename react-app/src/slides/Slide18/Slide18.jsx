import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { useT } from '../../i18n/useLanguage';
import styles from './Slide18.module.css';

export default function Slide18() {
    const t = useT();
    return (
        <SlideLayout>
            <Header
                title={t('slide18.title')}
                icon="fas fa-exclamation-triangle"
                iconColor="#f59e0b"
                subtitle={t('slide18.subtitle')}
            />

            {/* 5 Issue Type Cards */}
            <div className={styles.cardsGrid}>
                <div className={`${styles.issueCard} ${styles.issueCardRed}`}>
                    <div className={`${styles.issueCardIcon} ${styles.issueCardIconRed}`}>
                        <i className="fas fa-barcode" />
                    </div>
                    <div className={styles.issueCardName}>{t('slide18.issue1Name')}</div>
                    <div className={styles.issueCardDesc}>{t('slide18.issue1Desc')}</div>
                </div>

                <div className={`${styles.issueCard} ${styles.issueCardAmber}`}>
                    <div className={`${styles.issueCardIcon} ${styles.issueCardIconAmber}`}>
                        <i className="fas fa-ruler" />
                    </div>
                    <div className={styles.issueCardName}>{t('slide18.issue2Name')}</div>
                    <div className={styles.issueCardDesc}>{t('slide18.issue2Desc')}</div>
                </div>

                <div className={`${styles.issueCard} ${styles.issueCardPurple}`}>
                    <div className={`${styles.issueCardIcon} ${styles.issueCardIconPurple}`}>
                        <i className="fas fa-dollar-sign" />
                    </div>
                    <div className={styles.issueCardName}>{t('slide18.issue3Name')}</div>
                    <div className={styles.issueCardDesc}>{t('slide18.issue3Desc')}</div>
                </div>

                <div className={`${styles.issueCard} ${styles.issueCardBlue}`}>
                    <div className={`${styles.issueCardIcon} ${styles.issueCardIconBlue}`}>
                        <i className="fas fa-sitemap" />
                    </div>
                    <div className={styles.issueCardName}>{t('slide18.issue4Name')}</div>
                    <div className={styles.issueCardDesc}>{t('slide18.issue4Desc')}</div>
                </div>

                <div className={`${styles.issueCard} ${styles.issueCardOrange}`}>
                    <div className={`${styles.issueCardIcon} ${styles.issueCardIconOrange}`}>
                        <i className="fas fa-industry" />
                    </div>
                    <div className={styles.issueCardName}>{t('slide18.issue5Name')}</div>
                    <div className={styles.issueCardDesc}>{t('slide18.issue5Desc')}</div>
                </div>
            </div>

            {/* Benefits & Summary */}
            <div className={styles.body}>
                {/* Benefits */}
                <div className={styles.panel}>
                    <div className={styles.panelTitle}>
                        <i className="fas fa-shield-alt" style={{ color: '#10b981' }} />
                        {t('slide18.benefitsTitle')}
                    </div>
                    <div className={styles.benefitList}>
                        <div className={`${styles.benefitItem} ${styles.benefitItemGreen}`}>
                            <div className={`${styles.benefitItemIcon} ${styles.benefitItemIconGreen}`}>
                                <i className="fas fa-search" />
                            </div>
                            <div>
                                <div className={styles.benefitItemLabel}>{t('slide18.ben1Label')}</div>
                                <div className={styles.benefitItemDesc}>{t('slide18.ben1Desc')}</div>
                            </div>
                        </div>
                        <div className={`${styles.benefitItem} ${styles.benefitItemBlue}`}>
                            <div className={`${styles.benefitItemIcon} ${styles.benefitItemIconBlue}`}>
                                <i className="fas fa-tags" />
                            </div>
                            <div>
                                <div className={styles.benefitItemLabel}>{t('slide18.ben2Label')}</div>
                                <div className={styles.benefitItemDesc}>{t('slide18.ben2Desc')}</div>
                            </div>
                        </div>
                        <div className={`${styles.benefitItem} ${styles.benefitItemPurple}`}>
                            <div className={`${styles.benefitItemIcon} ${styles.benefitItemIconPurple}`}>
                                <i className="fas fa-file-export" />
                            </div>
                            <div>
                                <div className={styles.benefitItemLabel}>{t('slide18.ben3Label')}</div>
                                <div className={styles.benefitItemDesc}>{t('slide18.ben3Desc')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer text={t('slide18.footer')} />
        </SlideLayout>
    );
}
