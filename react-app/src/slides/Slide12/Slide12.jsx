import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import styles from './Slide12.module.css';

export default function Slide12() {
    return (
        <SlideLayout theme="light">
            <Header
                title="Actual BOM: Tổng quan"
                icon="fas fa-calculator"
                iconColor="#3b82f6"
                subtitle="Tính toán định mức thực tế tự động từ dữ liệu sản xuất"
            />

            {/* Flow: ERP Daily -> Engine -> Actual BOM */}
            <div className={styles.flow}>
                <div className={`${styles.flowStep} ${styles.flowStepBlue}`}>
                    <div className={`${styles.flowIcon} ${styles.flowIconBlue}`}>
                        <i className="fas fa-calendar-day" />
                    </div>
                    <div className={styles.flowName}>ERP Daily</div>
                    <div className={styles.flowDesc}>Dữ liệu giao dịch chi tiết theo ngày từ hệ thống ERP</div>
                    <span className={`${styles.flowTag} ${styles.flowTagBlue}`}>Input</span>
                </div>
                <div className={styles.flowArrow}><i className="fas fa-chevron-right" /></div>
                <div className={`${styles.flowStep} ${styles.flowStepGreen} ${styles.flowStepEngine}`}>
                    <div className={`${styles.flowIcon} ${styles.flowIconGreen}`}>
                        <i className="fas fa-cogs" />
                    </div>
                    <div className={styles.flowName}>Engine tính toán</div>
                    <div className={styles.flowDesc}>Tự động tính toán BOM thực tế dựa trên dữ liệu sản xuất</div>
                    <span className={`${styles.flowTag} ${styles.flowTagGreen}`}>Processing</span>
                </div>
                <div className={styles.flowArrow}><i className="fas fa-chevron-right" /></div>
                <div className={`${styles.flowStep} ${styles.flowStepPurple}`}>
                    <div className={`${styles.flowIcon} ${styles.flowIconPurple}`}>
                        <i className="fas fa-clipboard-check" />
                    </div>
                    <div className={styles.flowName}>Actual BOM</div>
                    <div className={styles.flowDesc}>Định mức thực tế đã tính toán, sẵn sàng cho báo cáo</div>
                    <span className={`${styles.flowTag} ${styles.flowTagPurple}`}>Output</span>
                </div>
            </div>

            {/* Notifications + Benefits */}
            <div className={styles.body}>
                {/* Notifications */}
                <div className={styles.notifications}>
                    <div className={styles.sectionTitle}>
                        <i className={`fas fa-bell ${styles.iconYellow}`} />
                        Thông báo tự động
                    </div>
                    <div className={`${styles.notif} ${styles.notifSuccess}`}>
                        <div className={`${styles.notifIcon} ${styles.notifIconSuccess}`}>
                            <i className="fas fa-check-circle" />
                        </div>
                        <div>
                            <div className={styles.notifTitle}>Tính toán hoàn thành</div>
                            <div className={styles.notifDesc}>42 BOM đã được tính toán thành công — 0 lỗi</div>
                            <div className={styles.notifMeta}>Vừa xong · Q1/2026</div>
                        </div>
                    </div>
                    <div className={`${styles.notif} ${styles.notifWarning}`}>
                        <div className={`${styles.notifIcon} ${styles.notifIconWarning}`}>
                            <i className="fas fa-exclamation-triangle" />
                        </div>
                        <div>
                            <div className={styles.notifTitle}>Phát hiện chênh lệch</div>
                            <div className={styles.notifDesc}>3 BOM có chênh lệch &gt; 10% so với BOM kỹ thuật</div>
                            <div className={styles.notifMeta}>Cần kiểm tra · Xem chi tiết</div>
                        </div>
                    </div>
                </div>

                {/* Benefits */}
                <div className={styles.benefits}>
                    <div className={styles.benefit}>
                        <div className={`${styles.benefitIcon} ${styles.benefitIconBlue}`}>
                            <i className="fas fa-ban" />
                        </div>
                        <div>
                            <div className={styles.benefitTitle}>Loại bỏ tính toán thủ công</div>
                            <div className={styles.benefitDesc}>Không cần tính BOM trên Excel — hệ thống tự động xử lý</div>
                        </div>
                    </div>
                    <div className={styles.benefit}>
                        <div className={`${styles.benefitIcon} ${styles.benefitIconGreen}`}>
                            <i className="fas fa-bullseye" />
                        </div>
                        <div>
                            <div className={styles.benefitTitle}>Độ chính xác cao</div>
                            <div className={styles.benefitDesc}>Đảm bảo chính xác, sẵn sàng cho báo cáo hải quan (mẫu 16)</div>
                        </div>
                    </div>
                    <div className={styles.benefit}>
                        <div className={`${styles.benefitIcon} ${styles.benefitIconPurple}`}>
                            <i className="fas fa-link" />
                        </div>
                        <div>
                            <div className={styles.benefitTitle}>Liên kết Annual Report</div>
                            <div className={styles.benefitDesc}>Kết quả tính toán tự động liên kết với báo cáo mẫu 16</div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer text="Tính toán BOM thực tế tự động từ ERP Daily, thông báo khi hoàn thành" />
        </SlideLayout>
    );
}
