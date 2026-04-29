import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { useT } from '../../i18n/useLanguage';
import styles from './Slide05.module.css';

export default function Slide05() {
    const t = useT();
    return (
        <SlideLayout>
            <Header
                title={t('slide05.title')}
                icon="fas fa-chart-bar"
                iconColor="#3b82f6"
                subtitle={t('slide05.subtitle')}
            />

            <div className={styles.body}>
                {/* KPIs section */}
                <div className={styles.section}>
                    <div className={styles.sectionTitle}>
                        <i className="fas fa-tachometer-alt" />
                        {t('slide05.sectionKpis')}
                    </div>
                    <div className={styles.kpiRow}>
                        <div className={styles.kpiItem}>
                            <div className={`${styles.kpiIcon} ${styles.iconBlue}`}>
                                <i className="fas fa-database" />
                            </div>
                            <div className={styles.kpiText}>
                                <div className={styles.kpiName}>Total ERP Items</div>
                                <div className={styles.kpiDesc}>{t('slide05.kpi1Desc')}</div>
                            </div>
                        </div>
                        <div className={styles.kpiItem}>
                            <div className={`${styles.kpiIcon} ${styles.iconGreen}`}>
                                <i className="fas fa-check-double" />
                            </div>
                            <div className={styles.kpiText}>
                                <div className={styles.kpiName}>Total ECUS Items</div>
                                <div className={styles.kpiDesc}>{t('slide05.kpi2Desc')}</div>
                            </div>
                        </div>
                        <div className={styles.kpiItem}>
                            <div className={`${styles.kpiIcon} ${styles.iconPurple}`}>
                                <i className="fas fa-file-invoice-dollar" />
                            </div>
                            <div className={styles.kpiText}>
                                <div className={styles.kpiName}>Estimated Taxes & Fees</div>
                                <div className={styles.kpiDesc}>{t('slide05.kpi3Desc')}</div>
                            </div>
                        </div>
                        <div className={styles.kpiItem}>
                            <div className={`${styles.kpiIcon} ${styles.iconBlue}`}>
                                <i className="fas fa-link" />
                            </div>
                            <div className={styles.kpiText}>
                                <div className={styles.kpiName}>Mapping Ratio</div>
                                <div className={styles.kpiDesc}>{t('slide05.kpi4Desc')}</div>
                            </div>
                        </div>
                        <div className={styles.kpiItem}>
                            <div className={`${styles.kpiIcon} ${styles.iconYellow}`}>
                                <i className="fas fa-exclamation-circle" />
                            </div>
                            <div className={styles.kpiText}>
                                <div className={styles.kpiName}>ECUS Unregistered</div>
                                <div className={styles.kpiDesc}>{t('slide05.kpi5Desc')}</div>
                            </div>
                        </div>
                        <div className={styles.kpiItem}>
                            <div className={`${styles.kpiIcon} ${styles.iconRed}`}>
                                <i className="fas fa-times-circle" />
                            </div>
                            <div className={styles.kpiText}>
                                <div className={styles.kpiName}>ERP Unregistered</div>
                                <div className={styles.kpiDesc}>{t('slide05.kpi6Desc')}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Charts section */}
                <div className={styles.section}>
                    <div className={styles.sectionTitle}>
                        <i className="fas fa-chart-line" />
                        {t('slide05.sectionCharts')}
                    </div>
                    <div className={styles.chartGrid}>
                        <div className={styles.chartCard}>
                            <div className={`${styles.chartIcon} ${styles.iconBlue}`}>
                                <i className="fas fa-chart-pie" />
                            </div>
                            <div className={styles.chartName}>Mapping ERP–ECUS</div>
                            <div className={styles.chartDesc}>{t('slide05.chart1Desc')}</div>
                        </div>
                        <div className={styles.chartCard}>
                            <div className={`${styles.chartIcon} ${styles.iconYellow}`}>
                                <i className="fas fa-exclamation-triangle" />
                            </div>
                            <div className={styles.chartName}>Number of Issues</div>
                            <div className={styles.chartDesc}>{t('slide05.chart2Desc')}</div>
                        </div>
                        <div className={styles.chartCard}>
                            <div className={`${styles.chartIcon} ${styles.iconRed}`}>
                                <i className="fas fa-sitemap" />
                            </div>
                            <div className={styles.chartName}>BOM Issues</div>
                            <div className={styles.chartDesc}>{t('slide05.chart3Desc')}</div>
                        </div>
                        <div className={styles.chartCard}>
                            <div className={`${styles.chartIcon} ${styles.iconOrange}`}>
                                <i className="fas fa-trophy" />
                            </div>
                            <div className={styles.chartName}>Top 5 RM Consumption Variance</div>
                            <div className={styles.chartDesc}>{t('slide05.chart4Desc')}</div>
                        </div>
                        <div className={styles.chartCard}>
                            <div className={`${styles.chartIcon} ${styles.iconPurple}`}>
                                <i className="fas fa-chart-line" />
                            </div>
                            <div className={styles.chartName}>Tax & Fee Trends</div>
                            <div className={styles.chartDesc}>{t('slide05.chart5Desc')}</div>
                        </div>
                        <div className={styles.chartCard}>
                            <div className={`${styles.chartIcon} ${styles.iconGreen}`}>
                                <i className="fas fa-balance-scale" />
                            </div>
                            <div className={styles.chartName}>ECUS–ERP Comparison</div>
                            <div className={styles.chartDesc}>{t('slide05.chart6Desc')}</div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer text={t('slide05.footer')} />
        </SlideLayout>
    );
}
