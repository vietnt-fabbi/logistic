import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import ScreenshotFrame from '../../components/common/ScreenshotFrame';
import styles from './Slide19.module.css';

export default function Slide19() {
    return (
        <SlideLayout>
            <Header
                title="HS Code Report"
                icon="fas fa-barcode"
                iconColor="#ef4444"
                subtitle="Phát hiện mã hàng ECUS gắn với nhiều HS Code khác nhau"
            />

            {/* Risk Callout */}
            <div className={styles.riskCallout}>
                <div className={styles.riskIcon}><i className="fas fa-exclamation-triangle" /></div>
                <div className={styles.riskText}>
                    <strong className={styles.riskLabel}>Rủi ro:</strong> Khai sai mã HS → sai thuế suất → bị truy thu thuế
                </div>
            </div>

            {/* Body */}
            <div className={styles.body}>
                {/* Screenshot (left) */}
                <ScreenshotFrame
                    src="./images/slide-19 - HS Code Report.jpg"
                    alt="HS Code Report"
                    title="Danh sách mã hàng có nhiều HS Code"
                    titleIcon="fas fa-table"
                    titleIconColor="#ef4444"
                    flex={3}
                />

                {/* Sidebar (right) */}
                <div className={styles.sidebar}>
                    <div className={styles.sidebarCard}>
                        <div className={styles.sidebarCardTitle}>
                            <i className="fas fa-bolt" style={{ color: '#ef4444' }} />Tính năng chính
                        </div>
                        <div className={styles.featureList}>
                            <div className={styles.featureItem}>
                                <div className={`${styles.featureIcon} ${styles.featureIconRed}`}>
                                    <i className="fas fa-barcode" />
                                </div>
                                <div className={styles.featureText}>
                                    <div className={styles.featureTitle}>Phát hiện HS Code bất nhất</div>
                                    <div className={styles.featureDesc}>Tìm các mã hàng được gắn với nhiều HS Code khác nhau trên ECUS</div>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={`${styles.featureIcon} ${styles.featureIconBlue}`}>
                                    <i className="fas fa-eye" />
                                </div>
                                <div className={styles.featureText}>
                                    <div className={styles.featureTitle}>Xem danh sách ECUS bất thường</div>
                                    <div className={styles.featureDesc}>Tra cứu chi tiết các tờ khai có vấn đề về mã HS</div>
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
                                <div className={`${styles.featureIcon} ${styles.featureIconAmber}`}>
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
            </div>

            <Footer text="Phát hiện mã hàng ECUS gắn với nhiều HS Code — rủi ro sai thuế suất" />
        </SlideLayout>
    );
}
