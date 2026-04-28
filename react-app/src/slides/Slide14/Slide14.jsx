import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import styles from './Slide14.module.css';

export default function Slide14() {
    return (
        <SlideLayout theme="light">
            <Header
                title="Annual Report: Tổng quan"
                icon="fas fa-file-contract"
                iconColor="#3b82f6"
                subtitle="Báo cáo quyết toán hải quan — đúng mẫu, đúng hạn"
            />

            {/* Flow: Hệ thống -> Export -> HQ */}
            <div className={styles.flow}>
                <div className={`${styles.flowStep} ${styles.flowStepBlue}`}>
                    <div className={`${styles.flowIcon} ${styles.flowIconBlue}`}>
                        <i className="fas fa-database" />
                    </div>
                    <div className={styles.flowName}>Hệ thống</div>
                    <div className={styles.flowDesc}>Dữ liệu đã xử lý</div>
                </div>
                <i className={`fas fa-arrow-right ${styles.flowArrow}`} />
                <div className={`${styles.flowStep} ${styles.flowStepGreen}`}>
                    <div className={`${styles.flowIcon} ${styles.flowIconGreen}`}>
                        <i className="fas fa-file-export" />
                    </div>
                    <div className={styles.flowName}>Export file</div>
                    <div className={styles.flowDesc}>Đúng mẫu hải quan</div>
                </div>
                <i className={`fas fa-arrow-right ${styles.flowArrow} ${styles.flowArrowGreen}`} />
                <div className={`${styles.flowStep} ${styles.flowStepPurple}`}>
                    <div className={`${styles.flowIcon} ${styles.flowIconPurple}`}>
                        <i className="fas fa-landmark" />
                    </div>
                    <div className={styles.flowName}>Hệ thống HQ</div>
                    <div className={styles.flowDesc}>Import trực tiếp</div>
                </div>
            </div>

            {/* Body */}
            <div className={styles.body}>
                {/* 3 Report Cards */}
                <div className={styles.reportCards}>
                    <div className={`${styles.reportCard} ${styles.reportCardBlue}`}>
                        <div className={styles.reportCardHeader}>
                            <div className={`${styles.reportCardIcon} ${styles.reportCardIconBlue}`}>
                                <i className="fas fa-boxes" />
                            </div>
                            <div>
                                <div className={styles.reportCardName}>Mẫu 15</div>
                                <div className={styles.reportCardSub}>Quyết toán NVL</div>
                            </div>
                        </div>
                        <div className={styles.reportCardDesc}>Báo cáo tổng hợp nhập–xuất–tồn nguyên vật liệu theo kỳ</div>
                    </div>
                    <div className={`${styles.reportCard} ${styles.reportCardGreen}`}>
                        <div className={styles.reportCardHeader}>
                            <div className={`${styles.reportCardIcon} ${styles.reportCardIconGreen}`}>
                                <i className="fas fa-cube" />
                            </div>
                            <div>
                                <div className={styles.reportCardName}>Mẫu 15A</div>
                                <div className={styles.reportCardSub}>Quyết toán thành phẩm</div>
                            </div>
                        </div>
                        <div className={styles.reportCardDesc}>Báo cáo tổng hợp nhập–xuất–tồn thành phẩm theo kỳ</div>
                    </div>
                    <div className={`${styles.reportCard} ${styles.reportCardPurple}`}>
                        <div className={styles.reportCardHeader}>
                            <div className={`${styles.reportCardIcon} ${styles.reportCardIconPurple}`}>
                                <i className="fas fa-clipboard-list" />
                            </div>
                            <div>
                                <div className={styles.reportCardName}>Mẫu 16</div>
                                <div className={styles.reportCardSub}>Định mức thực tế</div>
                            </div>
                        </div>
                        <div className={styles.reportCardDesc}>Báo cáo định mức sản xuất thực tế, liên kết Actual BOM</div>
                    </div>
                </div>

                {/* Time saving + Risk reduction */}
                <div className={styles.bottomRow}>
                    <div className={styles.card}>
                        <div className={styles.cardTitle}>
                            <i className={`fas fa-clock ${styles.iconYellow}`} />
                            Tiết kiệm thời gian
                        </div>
                        <div className={styles.timeCompare}>
                            <div className={styles.timeBox}>
                                <div className={`${styles.timeValueWrap} ${styles.timeValueWrapRed}`}>
                                    <div className={`${styles.timeValue} ${styles.timeValueRed}`}>5 ngày</div>
                                </div>
                                <div className={`${styles.timeLabel} ${styles.timeLabelRed}`}>Thủ công</div>
                            </div>
                            <div className={styles.timeArrow}>
                                <i className="fas fa-arrow-right" />
                                <div className={styles.timeArrowPct}>-99%</div>
                            </div>
                            <div className={styles.timeBox}>
                                <div className={`${styles.timeValueWrap} ${styles.timeValueWrapGreen}`}>
                                    <div className={`${styles.timeValue} ${styles.timeValueGreen}`}>5 phút</div>
                                </div>
                                <div className={`${styles.timeLabel} ${styles.timeLabelGreen}`}>Tự động</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardTitle}>
                            <i className={`fas fa-shield-alt ${styles.iconBlue}`} />
                            Giảm rủi ro
                        </div>
                        <div className={styles.riskList}>
                            <div className={styles.riskItem}>
                                <i className="fas fa-check-circle" />
                                <span>Giảm sai sót nhập liệu thủ công</span>
                            </div>
                            <div className={styles.riskItem}>
                                <i className="fas fa-check-circle" />
                                <span>Đúng mẫu hải quan quy định</span>
                            </div>
                            <div className={styles.riskItem}>
                                <i className="fas fa-check-circle" />
                                <span>Import trực tiếp lên hệ thống HQ</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer text="Xuất báo cáo đúng mẫu hải quan — import trực tiếp, tiết kiệm từ 5 ngày xuống 5 phút" />
        </SlideLayout>
    );
}
