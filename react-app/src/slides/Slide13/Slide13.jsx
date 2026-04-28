import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import styles from './Slide13.module.css';

export default function Slide13() {
    return (
        <SlideLayout theme="light">
            <Header
                title="Actual BOM: So sánh Kỹ thuật vs Thực tế"
                icon="fas fa-balance-scale"
                iconColor="#3b82f6"
                subtitle="Phát hiện chênh lệch bất thường giữa BOM kỹ thuật và BOM thực tế"
            />

            <div className={styles.body}>
                {/* Screenshot */}
                <div className={styles.tablePanel}>
                    <div className={styles.tableHeader}>
                        <div className={styles.tableTitle}>
                            <i className="fas fa-columns" />
                            Bảng so sánh BOM
                        </div>
                    </div>
                    <div className={styles.screenshotFrame}>
                        <img src="/images/slide-13 - list actual bom.jpg" alt="List Actual BOM" />
                    </div>
                </div>

                {/* Sidebar */}
                <div className={styles.sidebar}>
                    <div className={styles.card}>
                        <div className={styles.cardTitle}><i className="fas fa-star" style={{ color: '#f59e0b' }} />Tính năng nổi bật</div>
                        <div className={styles.featureItem}>
                            <i className="fas fa-cubes" style={{ color: '#3b82f6' }} />
                            <span>Đếm tổng số <strong>NVL</strong> trong BOM</span>
                        </div>
                        <div className={styles.featureItem}>
                            <i className="fas fa-tags" style={{ color: '#3b82f6' }} />
                            <span>Phân biệt: <strong>Khớp / Chênh lệch / Bất thường</strong></span>
                        </div>
                        <div className={styles.featureItem}>
                            <i className="fas fa-percentage" style={{ color: '#3b82f6' }} />
                            <span>Theo dõi <strong>tỷ lệ khớp</strong> khi có thay đổi</span>
                        </div>
                        <div className={styles.featureItem}>
                            <i className="fas fa-file-excel" style={{ color: '#3b82f6' }} />
                            <span><strong>Export Excel</strong> dễ dàng</span>
                        </div>
                    </div>

                    <div className={styles.benefit}>
                        <div className={styles.benefitIcon}>
                            <i className="fas fa-shield-alt" style={{ color: '#3b82f6' }} />
                        </div>
                        <div className={styles.benefitText}>
                            Chủ động giải trình với hải quan khi có chênh lệch
                        </div>
                    </div>
                </div>
            </div>

            <Footer text="So sánh BOM kỹ thuật (ERP BOM) với BOM thực tế (Actual BOM) — phát hiện chênh lệch tự động" />
        </SlideLayout>
    );
}
