import SlideLayout from '../../components/SlideLayout/SlideLayout';
import styles from './Slide25.module.css';

export default function Slide25() {
    return (
        <SlideLayout theme="dark">
            {/* Header */}
            <div className={styles.slideHeader}>
                <div className={styles.headerBrand}>
                    <img className={styles.headerLogoImg} src="./images/ken-logo.png" alt="Ken Logistics" />
                    <div>
                        <div className={styles.headerLabel}>LOGISTICS SOLUTION</div>
                        <div className={styles.headerName}>CUSTOMS CLEARANCE</div>
                    </div>
                </div>
                <div className={styles.headerTitle}>
                    <span className={styles.gradientText}>Bước tiếp theo</span>
                </div>
                <div className={styles.headerSubtitle}>
                    Hãy trải nghiệm giải pháp quản lý quyết toán hải quan tự động
                </div>
            </div>

            {/* Body */}
            <div className={styles.slideBody}>
                {/* 3 CTA Cards */}
                <div className={styles.ctaGrid}>
                    {/* Demo */}
                    <div className={`${styles.glassCard} ${styles.ctaCard}`}>
                        <div className={`${styles.ctaCardIcon} ${styles.ctaCardIconBlue}`}>
                            <i className="fas fa-desktop" />
                        </div>
                        <div className={styles.ctaCardTitle}>Demo trực tiếp</div>
                        <div className={styles.ctaCardDesc}>Xem hệ thống hoạt động thực tế với dữ liệu mẫu</div>
                        <div className={`${styles.ctaCardBtn} ${styles.ctaCardBtnBlue}`}>
                            <i className="fas fa-play-circle" /> Đặt lịch demo
                        </div>
                    </div>

                    {/* Pilot */}
                    <div className={`${styles.glassCard} ${styles.ctaCard}`}>
                        <div className={`${styles.ctaCardIcon} ${styles.ctaCardIconGreen}`}>
                            <i className="fas fa-rocket" />
                        </div>
                        <div className={styles.ctaCardTitle}>Pilot miễn phí</div>
                        <div className={styles.ctaCardDesc}>Dùng thử với dữ liệu thực của doanh nghiệp bạn</div>
                        <div className={`${styles.ctaCardBtn} ${styles.ctaCardBtnGreen}`}>
                            <i className="fas fa-paper-plane" /> Đăng ký pilot
                        </div>
                    </div>

                    {/* Meeting */}
                    <div className={`${styles.glassCard} ${styles.ctaCard}`}>
                        <div className={`${styles.ctaCardIcon} ${styles.ctaCardIconYellow}`}>
                            <i className="fas fa-handshake" />
                        </div>
                        <div className={styles.ctaCardTitle}>Meeting chi tiết</div>
                        <div className={styles.ctaCardDesc}>Trao đổi giải pháp phù hợp cho doanh nghiệp</div>
                        <div className={`${styles.ctaCardBtn} ${styles.ctaCardBtnYellow}`}>
                            <i className="fas fa-calendar-check" /> Đặt lịch họp
                        </div>
                    </div>
                </div>

                {/* Contact bar */}
                <div className={`${styles.glassCard} ${styles.contactBar}`}>
                    <div className={styles.contactBarInner}>
                        <div className={styles.contactBarItems}>
                            <div className={styles.contactItem}>
                                <div className={`${styles.contactItemIcon} ${styles.contactItemIconBlue}`}>
                                    <i className="fas fa-envelope" />
                                </div>
                                <div>
                                    <div className={styles.contactItemLabel}>Email</div>
                                    <div className={styles.contactItemValue}>bdteam@kenlogis.vn</div>
                                </div>
                            </div>
                            <div className={styles.contactDivider} />
                            <div className={styles.contactItem}>
                                <div className={`${styles.contactItemIcon} ${styles.contactItemIconGreen}`}>
                                    <i className="fas fa-phone-alt" />
                                </div>
                                <div>
                                    <div className={styles.contactItemLabel}>Hotline</div>
                                    <div className={styles.contactItemValue}>+84 24 3768 0066</div>
                                </div>
                            </div>
                            <div className={styles.contactDivider} />
                            <div className={styles.contactItem}>
                                <div className={`${styles.contactItemIcon} ${styles.contactItemIconYellow}`}>
                                    <i className="fas fa-globe" />
                                </div>
                                <div>
                                    <div className={styles.contactItemLabel}>Website</div>
                                    <div className={styles.contactItemValue}>https://kenlogis.vn/</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.statusBadge}>
                            <div className={`${styles.statusBadgeDot} ${styles.pulseDot}`} />
                            <span className={styles.statusBadgeText}>Sẵn sàng hỗ trợ</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className={styles.slideFooter}>
                <div className={styles.footerStats}>
                    <div className={styles.footerStat}>
                        <div className={styles.footerStatValue}>500+</div>
                        <div className={styles.footerStatLabel}>Doanh nghiệp</div>
                    </div>
                    <div className={styles.footerStat}>
                        <div className={styles.footerStatValue}>99.9%</div>
                        <div className={styles.footerStatLabel}>Độ chính xác</div>
                    </div>
                    <div className={styles.footerStat}>
                        <div className={styles.footerStatValue}>24/7</div>
                        <div className={styles.footerStatLabel}>Hỗ trợ</div>
                    </div>
                </div>
                <div className={styles.footerMeta}>
                    <div className={styles.footerMetaItem}>
                        <i className="fas fa-building" />KEN Logistics
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
}
