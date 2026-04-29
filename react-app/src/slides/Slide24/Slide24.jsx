import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { useT } from '../../i18n/useLanguage';
import styles from './Slide24.module.css';

export default function Slide24() {
    const t = useT();
    return (
        <SlideLayout>
            <Header
                title={t('slide24.title')}
                icon="fas fa-trophy"
                iconColor="#f59e0b"
                subtitle={t('slide24.subtitle')}
                badge={t('slide24.badge')}
                badgeStyle={{
                    background: 'rgba(59, 130, 246, 0.1)',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    color: '#3b82f6',
                }}
            />

            {/* 2x2 Grid */}
            <div className={styles.grid}>
                {/* 1: Tiết kiệm thời gian */}
                <div className={`${styles.card} ${styles.cardGreen}`}>
                    <div className={`${styles.cardIcon} ${styles.cardIconGreen}`}>
                        <i className="fas fa-clock" />
                    </div>
                    <div className={styles.cardBody}>
                        <div className={styles.cardTitle}>{t('slide24.card1Title')}</div>
                        <div className={styles.cardDesc}>
                            {t('slide24.card1Desc')}
                        </div>
                        <div className={styles.cardMetrics}>
                            <div className={`${styles.chip} ${styles.chipRed}`}>
                                <div className={styles.chipValue}>{t('slide24.card1Before')}</div>
                                <div className={styles.chipLabel}>{t('slide24.card1BeforeLabel')}</div>
                            </div>
                            <i className={`fas fa-arrow-right ${styles.arrow}`} />
                            <div className={`${styles.chip} ${styles.chipGreen}`}>
                                <div className={styles.chipValue}>{t('slide24.card1After')}</div>
                                <div className={styles.chipLabel}>{t('slide24.card1AfterLabel')}</div>
                            </div>
                            <div className={`${styles.chip} ${styles.chipGreenOutline}`}>
                                <div className={styles.chipValue}>-99%</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2: Giảm rủi ro */}
                <div className={`${styles.card} ${styles.cardBlue}`}>
                    <div className={`${styles.cardIcon} ${styles.cardIconBlue}`}>
                        <i className="fas fa-shield-alt" />
                    </div>
                    <div className={styles.cardBody}>
                        <div className={styles.cardTitle}>{t('slide24.card2Title')}</div>
                        <div className={styles.cardDesc}>
                            {t('slide24.card2Desc')}
                        </div>
                        <div className={styles.cardMetrics}>
                            <div className={`${styles.chip} ${styles.chipBlue}`}>
                                <div className={styles.chipValue}>99.9%</div>
                                <div className={styles.chipLabel}>{t('slide24.card2Chip1Label')}</div>
                            </div>
                            <div className={`${styles.chip} ${styles.chipBlue}`}>
                                <div className={styles.chipValue}>5</div>
                                <div className={styles.chipLabel}>{t('slide24.card2Chip2Label')}</div>
                            </div>
                            <div className={`${styles.chip} ${styles.chipBlue}`}>
                                <div className={styles.chipValue}>{t('slide24.card2Chip3Value')}</div>
                                <div className={styles.chipLabel}>{t('slide24.card2Chip3Label')}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3: Tuân thủ */}
                <div className={`${styles.card} ${styles.cardPurple}`}>
                    <div className={`${styles.cardIcon} ${styles.cardIconPurple}`}>
                        <i className="fas fa-check-double" />
                    </div>
                    <div className={styles.cardBody}>
                        <div className={styles.cardTitle}>{t('slide24.card3Title')}</div>
                        <div className={styles.cardDesc}>
                            {t('slide24.card3Desc')}
                        </div>
                        <div className={styles.cardMetrics}>
                            <div className={`${styles.chip} ${styles.chipPurple}`}>
                                <div className={styles.chipValue}>Mẫu 15</div>
                            </div>
                            <div className={`${styles.chip} ${styles.chipPurple}`}>
                                <div className={styles.chipValue}>Mẫu 15A</div>
                            </div>
                            <div className={`${styles.chip} ${styles.chipPurple}`}>
                                <div className={styles.chipValue}>Mẫu 16</div>
                            </div>
                            <div className={styles.chipGreenPill}>{t('slide24.card3Pill')}</div>
                        </div>
                    </div>
                </div>

                {/* 4: Kiểm soát */}
                <div className={`${styles.card} ${styles.cardYellow}`}>
                    <div className={`${styles.cardIcon} ${styles.cardIconYellow}`}>
                        <i className="fas fa-tachometer-alt" />
                    </div>
                    <div className={styles.cardBody}>
                        <div className={styles.cardTitle}>{t('slide24.card4Title')}</div>
                        <div className={styles.cardDesc}>
                            {t('slide24.card4Desc')}
                        </div>
                        <div className={styles.cardMetrics}>
                            <div className={`${styles.chip} ${styles.chipYellow}`}>
                                <div className={styles.chipValue}>24/7</div>
                                <div className={styles.chipLabel}>{t('slide24.card4Chip1Label')}</div>
                            </div>
                            <div className={`${styles.chip} ${styles.chipYellow}`}>
                                <div className={styles.chipValue}>6</div>
                                <div className={styles.chipLabel}>{t('slide24.card4Chip2Label')}</div>
                            </div>
                            <div className={`${styles.chip} ${styles.chipYellow}`}>
                                <div className={styles.chipValue}>{t('slide24.card4Chip3Value')}</div>
                                <div className={styles.chipLabel}>{t('slide24.card4Chip3Label')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer text={t('slide24.footer')} />
        </SlideLayout>
    );
}
