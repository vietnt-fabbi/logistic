import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import styles from './Slide17.module.css';

export default function Slide17() {
    return (
        <SlideLayout theme="light">
            <Header
                title="Annual Report 16: Định mức thực tế"
                icon="fas fa-clipboard-list"
                iconColor="#9333ea"
                subtitle="Báo cáo định mức sản xuất thực tế đã tính toán"
            />

            <div className={styles.body}>
                {/* Left: Table */}
                <div className={styles.tablePanel}>
                    <div className={styles.tablePanelHeader}>
                        <div className={styles.tablePanelTitle}>
                            <i className="fas fa-table" />
                            Báo cáo mẫu 16 — Định mức thực tế
                        </div>
                    </div>
                    <div className={styles.screenshotFrame}>
                        <img src="/images/slide-17 - annual report 16.jpg" alt="Annual Report 16" />
                    </div>
                </div>

                {/* Right: Sidebar */}
                <div className={styles.sidebar}>

                    {/* Actual BOM link */}
                    <div className={styles.bomLinkCard}>
                        <div className={styles.bomLinkHeader}>
                            <div className={styles.bomLinkIcon}>
                                <i className="fas fa-link" />
                            </div>
                            <div className={styles.bomLinkTitle}>Liên kết Actual BOM</div>
                        </div>
                        <div className={styles.bomLinkDesc}>
                            Dữ liệu định mức được lấy trực tiếp từ kết quả tính toán của module Actual BOM
                        </div>
                    </div>

                    <div className={styles.sidebarCard}>
                        <div className={styles.sidebarCardTitle}>
                            <i className="fas fa-bolt" />
                            Tính năng chính
                        </div>
                        <div className={styles.featureList}>
                            <div className={styles.featureItem}>
                                <div className={`${styles.featureIcon} ${styles.featureIconPurple}`}>
                                    <i className="fas fa-file-export" />
                                </div>
                                <div className={styles.featureText}>
                                    <div className={styles.featureTitle}>Xuất báo cáo chuẩn hải quan</div>
                                    <div className={styles.featureDesc}>Đúng biểu mẫu/format quy định của cơ quan hải quan, sẵn sàng nộp</div>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={`${styles.featureIcon} ${styles.featureIconBlue}`}>
                                    <i className="fas fa-calendar-alt" />
                                </div>
                                <div className={styles.featureText}>
                                    <div className={styles.featureTitle}>Lựa chọn kỳ theo dõi</div>
                                    <div className={styles.featureDesc}>Tuỳ chọn theo tháng / quý / năm tài chính cần báo cáo</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer text="Báo cáo mẫu 16 — Liên kết trực tiếp với kết quả từ module Actual BOM" />
        </SlideLayout>
    );
}
