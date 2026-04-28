import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import ScreenshotFrame from '../../components/common/ScreenshotFrame';
import styles from './Slide20.module.css';

export default function Slide20() {
    return (
        <SlideLayout>
            <Header
                title="Unit Report"
                icon="fas fa-ruler"
                iconColor="#f59e0b"
                subtitle="Phát hiện mã hàng khai báo với nhiều đơn vị tính khác nhau"
            />

            {/* Risk Callout */}
            <div className={styles.riskCallout}>
                <div className={styles.riskIcon}><i className="fas fa-exclamation-triangle" /></div>
                <div className={styles.riskText}>
                    <strong className={styles.riskLabel}>Rủi ro:</strong> Không nhất quán đơn vị → sai lệch số liệu quyết toán
                </div>
            </div>

            {/* Body: sidebar left | screenshot right */}
            <div className={styles.body}>
                {/* Sidebar (left) */}
                <div className={styles.sidebar}>
                    <div className={styles.sidebarCard}>
                        <div className={styles.sidebarCardTitle}>
                            <i className="fas fa-bolt" style={{ color: '#f59e0b' }} />Tính năng chính
                        </div>
                        <div className={styles.featureList}>
                            <div className={styles.featureItem}>
                                <div className={`${styles.featureIcon} ${styles.featureIconAmber}`}>
                                    <i className="fas fa-ruler" />
                                </div>
                                <div className={styles.featureText}>
                                    <div className={styles.featureTitle}>Phát hiện đơn vị tính bất nhất</div>
                                    <div className={styles.featureDesc}>Tìm các mã hàng được khai báo với nhiều đơn vị tính khác nhau trên ECUS</div>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={`${styles.featureIcon} ${styles.featureIconBlue}`}>
                                    <i className="fas fa-eye" />
                                </div>
                                <div className={styles.featureText}>
                                    <div className={styles.featureTitle}>Xem danh sách ECUS bất thường</div>
                                    <div className={styles.featureDesc}>Tra cứu chi tiết các tờ khai có vấn đề về đơn vị tính</div>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={`${styles.featureIcon} ${styles.featureIconGreen}`}>
                                    <i className="fas fa-file-excel" />
                                </div>
                                <div className={styles.featureText}>
                                    <div className={styles.featureTitle}>Export Excel</div>
                                    <div className={styles.featureDesc}>Xuất danh sách bất thường để báo cáo & lưu trữ</div>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={`${styles.featureIcon} ${styles.featureIconRed}`}>
                                    <i className="fas fa-signal" />
                                </div>
                                <div className={styles.featureText}>
                                    <div className={styles.featureTitle}>Lọc theo mức độ rủi ro</div>
                                    <div className={styles.featureDesc}>Phân loại Cao / Trung bình / Thấp để ưu tiên xử lý</div>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={`${styles.featureIcon} ${styles.featureIconPurple}`}>
                                    <i className="fas fa-calendar-alt" />
                                </div>
                                <div className={styles.featureText}>
                                    <div className={styles.featureTitle}>Lọc theo kỳ</div>
                                    <div className={styles.featureDesc}>Chọn xem dữ liệu theo tháng / quý / năm tài chính</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Screenshot (right) */}
                <ScreenshotFrame
                    src="/images/slide-20 - Unit Report.jpg"
                    alt="Unit Report"
                    title="Danh sách mã hàng nhiều đơn vị tính"
                    titleIcon="fas fa-table"
                    titleIconColor="#f59e0b"
                    flex={3}
                />
            </div>

            <Footer text="Phát hiện mã hàng khai báo với nhiều đơn vị tính — rủi ro sai lệch quyết toán" />
        </SlideLayout>
    );
}
