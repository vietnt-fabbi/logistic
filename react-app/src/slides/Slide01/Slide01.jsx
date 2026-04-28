import SlideLayout from '../../components/SlideLayout/SlideLayout';
import styles from './Slide01.module.css';

export default function Slide01() {
    return (
        <SlideLayout theme="dark">
            <img className={styles.bgImage} src="./images/slide-1 - bg.jpg" alt="Container Port" />
            <div className={styles.overlay} />

            <div className={styles.content}>
                {/* Body */}
                <div className={styles.body}>
                    {/* Left: Hero */}
                    <div className={styles.hero}>
                        <div className={styles.heroBadge}>
                            <img className={styles.heroBadgeLogo} src="./images/ken-logo.png" alt="Ken Logistics" />
                            <div>
                                <div className={styles.heroBadgeLabel}>LOGISTICS SOLUTION</div>
                                <div className={styles.heroBadgeSublabel}>CUSTOMS CLEARANCE</div>
                            </div>
                        </div>

                        <div className={styles.heroTitle}>
                            <span className={styles.gradientText}>Sản Phẩm Logistics</span><br />
                            <span className={styles.heroTitleSub}>Xuất Nhập Khẩu Hải Quan</span>
                        </div>

                        <div className={styles.heroFeatures}>
                            <i className="fas fa-check-circle" />Giải pháp quản lý quyết toán hải quan tự động<br />
                            <i className="fas fa-check-circle" />Tối ưu hóa quy trình xuất nhập khẩu
                        </div>

                        <div className={styles.heroKpis}>
                            <div className={styles.kpiCard}>
                                <i className={`fas fa-robot ${styles.kpiCardIcon}`} />
                                <div>
                                    <div className={styles.kpiCardLabel}>Tự động hóa</div>
                                    <div className={styles.kpiCardValue}>100%</div>
                                </div>
                            </div>
                            <div className={`${styles.kpiCard} ${styles.kpiCardGreen}`}>
                                <i className={`fas fa-clock ${styles.kpiCardIcon}`} />
                                <div>
                                    <div className={styles.kpiCardLabel}>Tiết kiệm</div>
                                    <div className={styles.kpiCardValue}>80%</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Glass card */}
                    <div className={styles.painCard}>
                        <div className={styles.painCardHeader}>
                            <div className={styles.painCardHeaderIcon}>
                                <i className="fas fa-exclamation-triangle" />
                            </div>
                            <div>
                                <div className={styles.painCardHeaderTitle}>Pain Points</div>
                                <div className={styles.painCardHeaderSub}>4 vấn đề chính</div>
                            </div>
                        </div>
                        <div className={styles.painCardList}>
                            <div className={styles.painCardItem}>
                                <div className={`${styles.painCardDot} ${styles.painCardDotRed}`} />
                                <span className={styles.painCardText}>Đối soát ERP ↔ ECUS thủ công</span>
                            </div>
                            <div className={styles.painCardItem}>
                                <div className={`${styles.painCardDot} ${styles.painCardDotOrange}`} />
                                <span className={styles.painCardText}>Báo cáo quyết toán phức tạp</span>
                            </div>
                            <div className={styles.painCardItem}>
                                <div className={`${styles.painCardDot} ${styles.painCardDotPurple}`} />
                                <span className={styles.painCardText}>Khó phát hiện bất thường</span>
                            </div>
                            <div className={styles.painCardItem}>
                                <div className={`${styles.painCardDot} ${styles.painCardDotBlue}`} />
                                <span className={styles.painCardText}>Tính BOM không đồng bộ</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className={styles.footer}>
                    <div className={styles.stats}>
                        <div className={styles.statsItem}>
                            <div className={styles.statsValue}>500+</div>
                            <div className={styles.statsLabel}>Doanh nghiệp</div>
                        </div>
                        <div className={styles.statsItem}>
                            <div className={styles.statsValue}>99.9%</div>
                            <div className={styles.statsLabel}>Độ chính xác</div>
                        </div>
                        <div className={styles.statsItem}>
                            <div className={styles.statsValue}>24/7</div>
                            <div className={styles.statsLabel}>Hỗ trợ</div>
                        </div>
                    </div>
                    <div className={styles.meta}>
                        <div className={styles.metaItem}>
                            <i className="fas fa-building" />KEN Logistics
                        </div>
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
}
