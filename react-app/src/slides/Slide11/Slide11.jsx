import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import styles from './Slide11.module.css';

export default function Slide11() {
    return (
        <SlideLayout theme="light">
            <Header
                title="Mapping động: Điểm khác biệt"
                icon="fas fa-magic"
                iconColor="#3b82f6"
                subtitle="Không yêu cầu khách hàng thay đổi format file ERP"
            />

            {/* 3 USP Cards */}
            <div className={styles.uspRow}>
                <div className={styles.uspCard}>
                    <div className={`${styles.uspIcon} ${styles.uspIconBlue}`}>
                        <i className="fas fa-file-excel" />
                    </div>
                    <div>
                        <div className={styles.uspTitle}>Không thay đổi format</div>
                        <div className={styles.uspDesc}>Hệ thống tự thích ứng với cấu trúc cột dữ liệu của khách hàng</div>
                    </div>
                </div>
                <div className={styles.uspCard}>
                    <div className={`${styles.uspIcon} ${styles.uspIconGreen}`}>
                        <i className="fas fa-cog" />
                    </div>
                    <div>
                        <div className={styles.uspTitle}>Cấu hình 1 lần</div>
                        <div className={styles.uspDesc}>Tái sử dụng cấu hình mapping cho tất cả các lần upload sau</div>
                    </div>
                </div>
                <div className={styles.uspCard}>
                    <div className={`${styles.uspIcon} ${styles.uspIconPurple}`}>
                        <i className="fas fa-arrows-alt-h" />
                    </div>
                    <div>
                        <div className={styles.uspTitle}>Mapping trực quan</div>
                        <div className={styles.uspDesc}>Giao diện drag-drop mapping cột trực quan, dễ sử dụng</div>
                    </div>
                </div>
            </div>

            {/* Before / After Comparison */}
            <div className={styles.comparison}>
                {/* BEFORE */}
                <div className={`${styles.panel} ${styles.panelBefore}`}>
                    <div className={styles.panelHeader}>
                        <div className={`${styles.panelBadge} ${styles.panelBadgeBefore}`}>
                            <i className="fas fa-times" />TRƯỚC
                        </div>
                        <span className={styles.panelLabel}>Quy trình thủ công</span>
                    </div>
                    <div className={styles.panelBody}>
                        <div className={`${styles.flowItem} ${styles.flowItemRed}`}>
                            <i className="fas fa-file-excel" />File ERP format A (.xlsx)
                        </div>
                        <div className={`${styles.flowItem} ${styles.flowItemRed}`}>
                            <i className="fas fa-file-alt" />File ERP format B (.xls)
                        </div>
                        <div className={`${styles.flowArrow} ${styles.flowArrowRed}`}>
                            <i className="fas fa-arrow-down" />
                        </div>
                        <div className={`${styles.flowItem} ${styles.flowItemRed}`}>
                            <i className="fas fa-user-edit" />Phải chỉnh sửa format mỗi lần
                        </div>
                        <div className={`${styles.flowArrow} ${styles.flowArrowRed}`}>
                            <i className="fas fa-arrow-down" />
                        </div>
                        <div className={`${styles.flowItem} ${styles.flowItemRedStrong}`}>
                            <i className="fas fa-exclamation-triangle" />Tốn thời gian, dễ sai sót
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className={styles.comparisonDivider}>
                    <div className={styles.dividerLabel}>vs</div>
                    <div className={styles.dividerIcon}>
                        <i className="fas fa-exchange-alt" />
                    </div>
                </div>

                {/* AFTER */}
                <div className={`${styles.panel} ${styles.panelAfter}`}>
                    <div className={styles.panelHeader}>
                        <div className={`${styles.panelBadge} ${styles.panelBadgeAfter}`}>
                            <i className="fas fa-check" />SAU
                        </div>
                        <span className={styles.panelLabel}>Mapping động tự động</span>
                    </div>
                    <div className={styles.panelBody}>
                        <div className={`${styles.flowItem} ${styles.flowItemGreen}`}>
                            <i className="fas fa-file-excel" />Bất kỳ format nào (.xlsx, .xls)
                        </div>
                        <div className={`${styles.flowArrow} ${styles.flowArrowGreen}`}>
                            <i className="fas fa-arrow-down" />
                        </div>
                        <div className={`${styles.flowItem} ${styles.flowItemGreenStrong}`}>
                            <i className="fas fa-magic" />Mapping tự động nhận diện cột
                        </div>
                        <div className={`${styles.flowArrow} ${styles.flowArrowGreen}`}>
                            <i className="fas fa-arrow-down" />
                        </div>
                        <div className={`${styles.flowItem} ${styles.flowItemBlueStrong}`}>
                            <i className="fas fa-database" />Dữ liệu chuẩn hóa vào hệ thống
                        </div>
                        <div className={`${styles.flowArrow} ${styles.flowArrowGreen}`}>
                            <i className="fas fa-arrow-down" />
                        </div>
                        <div className={`${styles.flowItem} ${styles.flowItemGreen}`}>
                            <i className="fas fa-redo" />Tái sử dụng cấu hình mọi lần sau
                        </div>
                    </div>
                </div>
            </div>

            <Footer text="Mapping động là điểm khác biệt cốt lõi — không yêu cầu thay đổi format file ERP" />
        </SlideLayout>
    );
}
