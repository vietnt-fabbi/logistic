import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import styles from './Slide05.module.css';

export default function Slide05() {
    return (
        <SlideLayout>
            <Header
                title="Dashboard: KPIs & Biểu đồ"
                icon="fas fa-chart-bar"
                iconColor="#3b82f6"
                subtitle="6 chỉ số chính + 6 biểu đồ trực quan theo dõi hải quan theo thời gian thực"
            />

            <div className={styles.body}>
                {/* KPIs section */}
                <div className={styles.section}>
                    <div className={styles.sectionTitle}>
                        <i className="fas fa-tachometer-alt" />
                        Chỉ số chính (KPIs)
                    </div>
                    <div className={styles.kpiRow}>
                        <div className={styles.kpiItem}>
                            <div className={`${styles.kpiIcon} ${styles.iconBlue}`}>
                                <i className="fas fa-database" />
                            </div>
                            <div className={styles.kpiText}>
                                <div className={styles.kpiName}>Total ERP Items</div>
                                <div className={styles.kpiDesc}>Tổng mã hàng ERP trong kỳ</div>
                            </div>
                        </div>
                        <div className={styles.kpiItem}>
                            <div className={`${styles.kpiIcon} ${styles.iconGreen}`}>
                                <i className="fas fa-check-double" />
                            </div>
                            <div className={styles.kpiText}>
                                <div className={styles.kpiName}>Total ECUS Items</div>
                                <div className={styles.kpiDesc}>Tổng mã hàng ECUS trong kỳ</div>
                            </div>
                        </div>
                        <div className={styles.kpiItem}>
                            <div className={`${styles.kpiIcon} ${styles.iconPurple}`}>
                                <i className="fas fa-file-invoice-dollar" />
                            </div>
                            <div className={styles.kpiText}>
                                <div className={styles.kpiName}>Estimated Taxes & Fees</div>
                                <div className={styles.kpiDesc}>Thuế / phí phạt ước tính</div>
                            </div>
                        </div>
                        <div className={styles.kpiItem}>
                            <div className={`${styles.kpiIcon} ${styles.iconBlue}`}>
                                <i className="fas fa-link" />
                            </div>
                            <div className={styles.kpiText}>
                                <div className={styles.kpiName}>Mapping Ratio</div>
                                <div className={styles.kpiDesc}>Tỷ lệ mapping ERP ↔ ECUS</div>
                            </div>
                        </div>
                        <div className={styles.kpiItem}>
                            <div className={`${styles.kpiIcon} ${styles.iconYellow}`}>
                                <i className="fas fa-exclamation-circle" />
                            </div>
                            <div className={styles.kpiText}>
                                <div className={styles.kpiName}>ECUS Unregistered</div>
                                <div className={styles.kpiDesc}>Mã ECUS chưa mapping ERP</div>
                            </div>
                        </div>
                        <div className={styles.kpiItem}>
                            <div className={`${styles.kpiIcon} ${styles.iconRed}`}>
                                <i className="fas fa-times-circle" />
                            </div>
                            <div className={styles.kpiText}>
                                <div className={styles.kpiName}>ERP Unregistered</div>
                                <div className={styles.kpiDesc}>Mã ERP chưa mapping ECUS</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Charts section */}
                <div className={styles.section}>
                    <div className={styles.sectionTitle}>
                        <i className="fas fa-chart-line" />
                        Biểu đồ trực quan
                    </div>
                    <div className={styles.chartGrid}>
                        <div className={styles.chartCard}>
                            <div className={`${styles.chartIcon} ${styles.iconBlue}`}>
                                <i className="fas fa-chart-pie" />
                            </div>
                            <div className={styles.chartName}>Mapping ERP–ECUS</div>
                            <div className={styles.chartDesc}>Tỷ lệ mã hàng đã mapping giữa hai hệ thống</div>
                        </div>
                        <div className={styles.chartCard}>
                            <div className={`${styles.chartIcon} ${styles.iconYellow}`}>
                                <i className="fas fa-exclamation-triangle" />
                            </div>
                            <div className={styles.chartName}>Number of Issues</div>
                            <div className={styles.chartDesc}>Tổng số vấn đề phát hiện theo từng loại</div>
                        </div>
                        <div className={styles.chartCard}>
                            <div className={`${styles.chartIcon} ${styles.iconRed}`}>
                                <i className="fas fa-sitemap" />
                            </div>
                            <div className={styles.chartName}>BOM Issues</div>
                            <div className={styles.chartDesc}>Bất thường trong định mức sản xuất theo BOM</div>
                        </div>
                        <div className={styles.chartCard}>
                            <div className={`${styles.chartIcon} ${styles.iconOrange}`}>
                                <i className="fas fa-trophy" />
                            </div>
                            <div className={styles.chartName}>Top 5 RM Consumption Variance</div>
                            <div className={styles.chartDesc}>Top 5 NVL có chênh lệch tiêu hao lớn nhất</div>
                        </div>
                        <div className={styles.chartCard}>
                            <div className={`${styles.chartIcon} ${styles.iconPurple}`}>
                                <i className="fas fa-chart-line" />
                            </div>
                            <div className={styles.chartName}>Tax & Fee Trends</div>
                            <div className={styles.chartDesc}>Xu hướng thuế và phí phạt qua các kỳ</div>
                        </div>
                        <div className={styles.chartCard}>
                            <div className={`${styles.chartIcon} ${styles.iconGreen}`}>
                                <i className="fas fa-balance-scale" />
                            </div>
                            <div className={styles.chartName}>ECUS–ERP Comparison</div>
                            <div className={styles.chartDesc}>So sánh số liệu khai báo ECUS với dữ liệu ERP</div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer text="Dashboard cập nhật theo thời gian thực — KPIs & biểu đồ giúp nắm nhanh tình trạng hải quan" />
        </SlideLayout>
    );
}
