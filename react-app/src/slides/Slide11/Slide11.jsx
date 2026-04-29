import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { useT } from '../../i18n/useLanguage';
import styles from './Slide11.module.css';

export default function Slide11() {
    const t = useT();
    return (
        <SlideLayout theme="light">
            <Header
                title={t('slide11.title')}
                icon="fas fa-magic"
                iconColor="#3b82f6"
                subtitle={t('slide11.subtitle')}
            />

            {/* 3 USP Cards */}
            <div className={styles.uspRow}>
                <div className={styles.uspCard}>
                    <div className={`${styles.uspIcon} ${styles.uspIconBlue}`}>
                        <i className="fas fa-file-excel" />
                    </div>
                    <div>
                        <div className={styles.uspTitle}>{t('slide11.usp1Title')}</div>
                        <div className={styles.uspDesc}>{t('slide11.usp1Desc')}</div>
                    </div>
                </div>
                <div className={styles.uspCard}>
                    <div className={`${styles.uspIcon} ${styles.uspIconGreen}`}>
                        <i className="fas fa-cog" />
                    </div>
                    <div>
                        <div className={styles.uspTitle}>{t('slide11.usp2Title')}</div>
                        <div className={styles.uspDesc}>{t('slide11.usp2Desc')}</div>
                    </div>
                </div>
                <div className={styles.uspCard}>
                    <div className={`${styles.uspIcon} ${styles.uspIconPurple}`}>
                        <i className="fas fa-arrows-alt-h" />
                    </div>
                    <div>
                        <div className={styles.uspTitle}>{t('slide11.usp3Title')}</div>
                        <div className={styles.uspDesc}>{t('slide11.usp3Desc')}</div>
                    </div>
                </div>
            </div>

            {/* Before / After Comparison */}
            <div className={styles.comparison}>
                {/* BEFORE */}
                <div className={`${styles.panel} ${styles.panelBefore}`}>
                    <div className={styles.panelHeader}>
                        <div className={`${styles.panelBadge} ${styles.panelBadgeBefore}`}>
                            <i className="fas fa-times" />{t('slide11.beforeBadge')}
                        </div>
                        <span className={styles.panelLabel}>{t('slide11.beforeLabel')}</span>
                    </div>
                    <div className={styles.panelBody}>
                        <div className={`${styles.flowItem} ${styles.flowItemRed}`}>
                            <i className="fas fa-file-excel" />{t('slide11.beforeItem1')}
                        </div>
                        <div className={`${styles.flowItem} ${styles.flowItemRed}`}>
                            <i className="fas fa-file-alt" />{t('slide11.beforeItem2')}
                        </div>
                        <div className={`${styles.flowArrow} ${styles.flowArrowRed}`}>
                            <i className="fas fa-arrow-down" />
                        </div>
                        <div className={`${styles.flowItem} ${styles.flowItemRed}`}>
                            <i className="fas fa-user-edit" />{t('slide11.beforeItem3')}
                        </div>
                        <div className={`${styles.flowArrow} ${styles.flowArrowRed}`}>
                            <i className="fas fa-arrow-down" />
                        </div>
                        <div className={`${styles.flowItem} ${styles.flowItemRedStrong}`}>
                            <i className="fas fa-exclamation-triangle" />{t('slide11.beforeItem4')}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className={styles.comparisonDivider}>
                    <div className={styles.dividerLabel}>vs</div>
                    <div className={styles.dividerIcon}>
                        <i className="fas fa-exchange-alt" />
                    </div>
                </div>

                {/* AFTER */}
                <div className={`${styles.panel} ${styles.panelAfter}`}>
                    <div className={styles.panelHeader}>
                        <div className={`${styles.panelBadge} ${styles.panelBadgeAfter}`}>
                            <i className="fas fa-check" />{t('slide11.afterBadge')}
                        </div>
                        <span className={styles.panelLabel}>{t('slide11.afterLabel')}</span>
                    </div>
                    <div className={styles.panelBody}>
                        <div className={`${styles.flowItem} ${styles.flowItemGreen}`}>
                            <i className="fas fa-file-excel" />{t('slide11.afterItem1')}
                        </div>
                        <div className={`${styles.flowArrow} ${styles.flowArrowGreen}`}>
                            <i className="fas fa-arrow-down" />
                        </div>
                        <div className={`${styles.flowItem} ${styles.flowItemGreenStrong}`}>
                            <i className="fas fa-magic" />{t('slide11.afterItem2')}
                        </div>
                        <div className={`${styles.flowArrow} ${styles.flowArrowGreen}`}>
                            <i className="fas fa-arrow-down" />
                        </div>
                        <div className={`${styles.flowItem} ${styles.flowItemBlueStrong}`}>
                            <i className="fas fa-database" />{t('slide11.afterItem3')}
                        </div>
                        <div className={`${styles.flowArrow} ${styles.flowArrowGreen}`}>
                            <i className="fas fa-arrow-down" />
                        </div>
                        <div className={`${styles.flowItem} ${styles.flowItemGreen}`}>
                            <i className="fas fa-redo" />{t('slide11.afterItem4')}
                        </div>
                    </div>
                </div>
            </div>

            <Footer text={t('slide11.footer')} />
        </SlideLayout>
    );
}
