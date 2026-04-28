import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import ScreenshotFrame from '../../components/common/ScreenshotFrame';
import styles from './Slide10.module.css';

export default function Slide10() {
    return (
        <SlideLayout theme="light">
            <Header
                title="ERP BOM: Định mức kỹ thuật"
                icon="fas fa-sitemap"
                iconColor="#3b82f6"
                subtitle="Upload và quản lý dữ liệu định mức sản xuất kỹ thuật từ ERP"
            />

            <div className={styles.body}>
                {/* Left: Screenshot */}
                <div className={styles.bodyLeft}>
                    <ScreenshotFrame
                        src="./images/slide-10 - list erp bom.jpg"
                        alt="List ERP BOM"
                        title="Màn hình quản lý ERP BOM"
                        titleIcon="fas fa-table"
                        titleIconColor="#3b82f6"
                        tags={[
                            { label: '100 dòng', bg: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' },
                            { label: 'Q1/2026', bg: 'rgba(16, 185, 129, 0.1)', color: '#10b981' },
                        ]}
                    />
                </div>

                {/* Right: Sidebar */}
                <div className={styles.bodyRight}>
                    {/* Features */}
                    <div className={styles.featureCard}>
                        <div className={styles.featureCardTitle}>
                            <i className="fas fa-list-check" />
                            Thông tin BOM
                        </div>
                        <div className={styles.featureItem}>
                            <i className="fas fa-check" />
                            Model, Level, Sequence
                        </div>
                        <div className={styles.featureItem}>
                            <i className="fas fa-check" />
                            Child Item Code &amp; Specification
                        </div>
                        <div className={styles.featureItem}>
                            <i className="fas fa-check" />
                            Procurement Type, BOM Type
                        </div>
                        <div className={styles.featureItem}>
                            <i className="fas fa-check" />
                            Parent/Child Item Qty &amp; Unit
                        </div>
                        <div className={styles.featureItem}>
                            <i className="fas fa-check" />
                            Safety L/T, Loss Rate
                        </div>
                    </div>

                    {/* Benefit */}
                    <div className={styles.benefit}>
                        <div className={styles.benefitIcon}>
                            <i className="fas fa-lightbulb" />
                        </div>
                        <div className={styles.benefitText}>
                            <strong>Chuẩn hóa BOM kỹ thuật</strong> — làm cơ sở so sánh với BOM thực tế
                        </div>
                    </div>

                    {/* Upload info */}
                    <div className={styles.uploadInfo}>
                        <div className={styles.uploadInfoTitle}>
                            <i className="fas fa-cloud-upload-alt" />
                            Upload &amp; Mapping
                        </div>
                        <div className={styles.uploadStatus}>
                            <div className={styles.uploadStatusDot} />
                            Cùng cơ chế mapping động
                        </div>
                    </div>
                </div>
            </div>

            <Footer text="BOM kỹ thuật làm cơ sở so sánh với BOM thực tế từ module Actual BOM" />
        </SlideLayout>
    );
}
