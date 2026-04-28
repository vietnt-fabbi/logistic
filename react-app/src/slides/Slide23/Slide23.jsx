import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import styles from './Slide23.module.css';

export default function Slide23() {
    return (
        <SlideLayout>
            <Header
                title="Production Issue"
                icon="fas fa-industry"
                iconColor="#ea580c"
                subtitle="So sánh NVL theo định mức vs NVL thực tế đưa vào sản xuất"
            />

            {/* Risk callout */}
            <div className={styles.riskCallout}>
                <div className={styles.riskCalloutIcon}><i className="fas fa-exclamation-triangle" /></div>
                <div className={styles.riskCalloutText}>
                    <strong>Rủi ro:</strong> Chênh lệch lớn → hải quan yêu cầu giải trình
                </div>
            </div>

            {/* Body */}
            <div className={styles.body}>
                {/* Table */}
                <div className={`${styles.card} ${styles.panelTable}`}>
                    <div className={styles.cardTitle}>
                        <i className="fas fa-table" />So sánh NVL định mức vs thực tế
                    </div>
                    <div className={styles.screenshotFrame}>
                        <img src="/images/slide-23 - Production Issue.jpg" alt="Production Issue" />
                    </div>
                </div>

                {/* Sidebar */}
                <div className={styles.panelSidebar}>
                    <div className={styles.card}>
                        <div className={styles.cardTitle}>
                            <i className="fas fa-bolt" />Tính năng chính
                        </div>
                        <div className={styles.featureList}>
                            <div className={styles.featureItem}>
                                <div className={`${styles.featureIcon} ${styles.featureIconOrange}`}>
                                    <i className="fas fa-balance-scale" />
                                </div>
                                <div className={styles.featureText}>
                                    <div className={styles.featureTitle}>Đối chiếu định mức vs thực tế</div>
                                    <div className={styles.featureDesc}>Phát hiện chênh lệch NVL theo BOM và NVL đã đưa vào sản xuất</div>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={`${styles.featureIcon} ${styles.featureIconBlue}`}>
                                    <i className="fas fa-eye" />
                                </div>
                                <div className={styles.featureText}>
                                    <div className={styles.featureTitle}>Xem danh sách chênh lệch</div>
                                    <div className={styles.featureDesc}>Tra cứu chi tiết theo từng mã NVL / lệnh sản xuất</div>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={`${styles.featureIcon} ${styles.featureIconGreen}`}>
                                    <i className="fas fa-file-excel" />
                                </div>
                                <div className={styles.featureText}>
                                    <div className={styles.featureTitle}>Export Excel</div>
                                    <div className={styles.featureDesc}>Xuất danh sách chênh lệch để báo cáo & lưu trữ</div>
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

            <Footer text="So sánh NVL theo định mức vs thực tế sản xuất — phát hiện thừa, thiếu, sai NVL" />
        </SlideLayout>
    );
}
