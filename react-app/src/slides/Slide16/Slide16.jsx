import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import styles from './Slide16.module.css';

export default function Slide16() {
    return (
        <SlideLayout theme="light">
            <Header
                title="Annual Report 15A: Quyết toán thành phẩm"
                icon="fas fa-cube"
                iconColor="#10b981"
                subtitle="Báo cáo tổng hợp nhập–xuất–tồn thành phẩm theo kỳ"
            />

            <div className={styles.body}>
                {/* Left: Table */}
                <div className={styles.tablePanel}>
                    <div className={styles.tablePanelHeader}>
                        <div className={styles.tablePanelTitle}>
                            <i className="fas fa-table" />
                            Báo cáo mẫu 15A — Thành phẩm
                        </div>
                    </div>
                    <div className={styles.screenshotFrame}>
                        <img src="/images/slide-16 - annual report 15a.jpg" alt="Annual Report 15A" />
                    </div>
                </div>

                {/* Right: Sidebar */}
                <div className={styles.sidebar}>
                    <div className={styles.sidebarCard}>
                        <div className={styles.sidebarCardTitle}>
                            <i className="fas fa-bolt" />
                            Tính năng chính
                        </div>
                        <div className={styles.featureList}>
                            <div className={styles.featureItem}>
                                <div className={`${styles.featureIcon} ${styles.featureIconGreen}`}>
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

            <Footer text="Báo cáo mẫu 15A — Quyết toán thành phẩm sản xuất–xuất–tồn theo kỳ" />
        </SlideLayout>
    );
}
