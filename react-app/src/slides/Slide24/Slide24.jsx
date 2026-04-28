import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import styles from './Slide24.module.css';

export default function Slide24() {
    return (
        <SlideLayout>
            <Header
                title="Tổng hợp lợi ích"
                icon="fas fa-trophy"
                iconColor="#f59e0b"
                subtitle="Giá trị mang lại cho doanh nghiệp xuất nhập khẩu"
                badge="4 giá trị cốt lõi"
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
                        <div className={styles.cardTitle}>Tiết kiệm thời gian</div>
                        <div className={styles.cardDesc}>
                            Tự động hóa upload, tính toán, xuất báo cáo — loại bỏ công việc thủ công lặp đi lặp lại
                        </div>
                        <div className={styles.cardMetrics}>
                            <div className={`${styles.chip} ${styles.chipRed}`}>
                                <div className={styles.chipValue}>5 ngày</div>
                                <div className={styles.chipLabel}>Trước</div>
                            </div>
                            <i className={`fas fa-arrow-right ${styles.arrow}`} />
                            <div className={`${styles.chip} ${styles.chipGreen}`}>
                                <div className={styles.chipValue}>5 phút</div>
                                <div className={styles.chipLabel}>Sau</div>
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
                        <div className={styles.cardTitle}>Giảm rủi ro</div>
                        <div className={styles.cardDesc}>
                            Phát hiện bất thường trước khi hải quan kiểm tra — HS Code, đơn giá, đơn vị tính, BOM
                        </div>
                        <div className={styles.cardMetrics}>
                            <div className={`${styles.chip} ${styles.chipBlue}`}>
                                <div className={styles.chipValue}>99.9%</div>
                                <div className={styles.chipLabel}>Độ chính xác</div>
                            </div>
                            <div className={`${styles.chip} ${styles.chipBlue}`}>
                                <div className={styles.chipValue}>5</div>
                                <div className={styles.chipLabel}>Loại issue</div>
                            </div>
                            <div className={`${styles.chip} ${styles.chipBlue}`}>
                                <div className={styles.chipValue}>Auto</div>
                                <div className={styles.chipLabel}>Quét tự động</div>
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
                        <div className={styles.cardTitle}>Tuân thủ</div>
                        <div className={styles.cardDesc}>
                            Đúng mẫu hải quan, import trực tiếp lên hệ thống quản lý dữ liệu hải quan
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
                            <div className={styles.chipGreenPill}>Import HQ</div>
                        </div>
                    </div>
                </div>

                {/* 4: Kiểm soát */}
                <div className={`${styles.card} ${styles.cardYellow}`}>
                    <div className={`${styles.cardIcon} ${styles.cardIconYellow}`}>
                        <i className="fas fa-tachometer-alt" />
                    </div>
                    <div className={styles.cardBody}>
                        <div className={styles.cardTitle}>Kiểm soát</div>
                        <div className={styles.cardDesc}>
                            Dashboard real-time, lịch sử truy vết đầy đủ, mapping ERP ↔ ECUS minh bạch
                        </div>
                        <div className={styles.cardMetrics}>
                            <div className={`${styles.chip} ${styles.chipYellow}`}>
                                <div className={styles.chipValue}>24/7</div>
                                <div className={styles.chipLabel}>Monitoring</div>
                            </div>
                            <div className={`${styles.chip} ${styles.chipYellow}`}>
                                <div className={styles.chipValue}>6</div>
                                <div className={styles.chipLabel}>KPIs</div>
                            </div>
                            <div className={`${styles.chip} ${styles.chipYellow}`}>
                                <div className={styles.chipValue}>Full</div>
                                <div className={styles.chipLabel}>Audit trail</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer text="4 giá trị cốt lõi: Tiết kiệm thời gian, Giảm rủi ro, Tuân thủ, Kiểm soát" />
        </SlideLayout>
    );
}
