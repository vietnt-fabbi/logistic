import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import styles from './Slide21.module.css';

export default function Slide21() {
    return (
        <SlideLayout>
            <Header
                title="Unit Price Report"
                icon="fas fa-dollar-sign"
                iconColor="#9333ea"
                subtitle="Phát hiện mã hàng khai báo với nhiều đơn giá khác nhau"
            />

            {/* Risk Callout */}
            <div className={styles.riskCallout}>
                <div className={styles.riskCalloutIcon}><i className="fas fa-exclamation-triangle" /></div>
                <div className={styles.riskCalloutText}>
                    <strong className={styles.riskCalloutLabel}>Rủi ro:</strong> Chênh lệch giá → nghi vấn chuyển giá hoặc gian lận thuế
                </div>
            </div>

            {/* Body */}
            <div className={styles.body}>
                {/* Table */}
                <div className={styles.tablePanel}>
                    <div className={styles.tablePanelHeader}>
                        <div className={styles.tablePanelTitle}>
                            <i className="fas fa-table" style={{ color: '#9333ea' }} />
                            Danh sách chênh lệch giá
                        </div>
                    </div>
                    <div className={styles.screenshotFrame}>
                        <img src="./images/slide-21 - Unit Price Report.jpg" alt="Unit Price Report" />
                    </div>
                </div>

                {/* Sidebar — feature description */}
                <div className={styles.sidebar}>
                    <div className={styles.chartPanel}>
                        <div className={styles.chartPanelTitle}>
                            <i className="fas fa-bolt" style={{ color: '#9333ea' }} />
                            Tính năng chính
                        </div>
                        <div className={styles.featureList}>
                            <div className={styles.featureItem}>
                                <div className={`${styles.featureIcon} ${styles.featureIconPurple}`}>
                                    <i className="fas fa-search-dollar" />
                                </div>
                                <div className={styles.featureText}>
                                    <div className={styles.featureTitle}>Phát hiện chênh lệch đơn giá</div>
                                    <div className={styles.featureDesc}>Tìm các mã hàng được khai báo với nhiều đơn giá khác nhau trên ECUS</div>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={`${styles.featureIcon} ${styles.featureIconBlue}`}>
                                    <i className="fas fa-eye" />
                                </div>
                                <div className={styles.featureText}>
                                    <div className={styles.featureTitle}>Xem danh sách ECUS bất thường</div>
                                    <div className={styles.featureDesc}>Tra cứu chi tiết các tờ khai có vấn đề về mã giá</div>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={`${styles.featureIcon} ${styles.featureIconGreen}`}>
                                    <i className="fas fa-file-excel" />
                                </div>
                                <div className={styles.featureText}>
                                    <div className={styles.featureTitle}>Export Excel</div>
                                    <div className={styles.featureDesc}>Xuất danh sách chênh lệch đơn giá để báo cáo & lưu trữ</div>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={`${styles.featureIcon} ${styles.featureIconAmber}`}>
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

            <Footer text="Phát hiện chênh lệch đơn giá — rủi ro nghi vấn chuyển giá" />
        </SlideLayout>
    );
}
