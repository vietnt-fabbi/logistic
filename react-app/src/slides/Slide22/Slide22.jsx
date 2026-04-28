import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import styles from './Slide22.module.css';

export default function Slide22() {
    return (
        <SlideLayout>
            <Header
                title="BOM Report"
                icon="fas fa-sitemap"
                iconColor="#3b82f6"
                subtitle="Phát hiện bất thường trong dữ liệu định mức sản xuất"
            />

            {/* Risk callout */}
            <div className={styles.riskCallout}>
                <div className={styles.riskCalloutIcon}><i className="fas fa-exclamation-triangle" /></div>
                <div className={styles.riskCalloutText}>
                    <strong>Rủi ro:</strong> BOM sai → quyết toán sai → phạt
                </div>
            </div>

            {/* Body */}
            <div className={styles.body}>
                {/* Table */}
                <div className={`${styles.card} ${styles.panelTable}`}>
                    <div className={styles.cardTitle}>
                        <i className="fas fa-table" />Danh sách BOM bất thường
                    </div>
                    <div className={styles.screenshotFrame}>
                        <img src="/images/slide-22 - BOM Report.jpg" alt="BOM Report" />
                    </div>
                </div>

                {/* Sidebar */}
                <div className={styles.panelSidebar}>
                    <div className={styles.card}>
                        <div className={styles.cardTitle}>
                            <i className="fas fa-list-check" />Loại báo cáo
                        </div>
                        <div className={styles.reportList}>
                            <div className={styles.reportItem}>
                                <span className={`${styles.reportBadge} ${styles.reportBadgeFg}`}>FG</span>
                                <span className={styles.reportLabel}>FG Lacking BOM</span>
                            </div>
                            <div className={styles.reportItem}>
                                <span className={`${styles.reportBadge} ${styles.reportBadgeSemi}`}>Semi</span>
                                <span className={styles.reportLabel}>Semi Lacking BOM</span>
                            </div>
                            <div className={styles.reportItem}>
                                <span className={`${styles.reportBadge} ${styles.reportBadgeRm}`}>RM</span>
                                <span className={styles.reportLabel}>RM Lacking BOM</span>
                            </div>
                            <div className={styles.reportItem}>
                                <span className={`${styles.reportBadge} ${styles.reportBadgeWarn}`}>&lt;1</span>
                                <span className={styles.reportLabel}>BOM &lt; 1 with Master unit</span>
                            </div>
                            <div className={styles.reportItem}>
                                <span className={`${styles.reportBadge} ${styles.reportBadgeUnused}`}>ERP</span>
                                <span className={styles.reportLabel}>Unused RM in ERP BOM</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardTitle}>
                            <i className="fas fa-bolt" />Tính năng
                        </div>
                        <div className={styles.featureList}>
                            <div className={styles.featureItem}>
                                <div className={`${styles.featureIcon} ${styles.featureIconBlue}`}>
                                    <i className="fas fa-calendar-alt" />
                                </div>
                                <div className={styles.featureText}>
                                    <div className={styles.featureTitle}>Lựa chọn kỳ báo cáo</div>
                                    <div className={styles.featureDesc}>Theo tháng / quý / năm tài chính</div>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={`${styles.featureIcon} ${styles.featureIconGreen}`}>
                                    <i className="fas fa-file-excel" />
                                </div>
                                <div className={styles.featureText}>
                                    <div className={styles.featureTitle}>Xuất file Excel</div>
                                    <div className={styles.featureDesc}>Tải về toàn bộ kết quả kiểm tra</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer text="Phát hiện bất thường trong định mức sản xuất — BOM sai → quyết toán sai" />
        </SlideLayout>
    );
}
