import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import styles from './Slide02.module.css';

export default function Slide02() {
    return (
        <SlideLayout>
            <Header
                title="Bài toán của doanh nghiệp XNK"
                icon="fas fa-exclamation-triangle"
                iconColor="#ef4444"
                subtitle="4 vấn đề cốt lõi đang ảnh hưởng đến hoạt động xuất nhập khẩu"
            />

            {/* Body */}
            <div className={styles.body}>
                {/* Left: Pain points */}
                <div className={styles.painList}>
                    <div className={styles.painPoint}>
                        <div className={`${styles.painPointIcon} ${styles.painPointIconRed}`}>
                            <i className="fas fa-exchange-alt" />
                        </div>
                        <div className={styles.painPointBody}>
                            <div className={styles.painPointTop}>
                                <span className={styles.painPointName}>Đối soát ERP ↔ ECUS thủ công</span>
                                <span className={`${styles.statusBadge} ${styles.statusBadgeError}`}>
                                    <i className="fas fa-times-circle" /> Sai sót cao
                                </span>
                            </div>
                            <div className={styles.painPointDesc}>Tốn thời gian, dễ sai sót khi đối chiếu dữ liệu giữa hai hệ thống</div>
                        </div>
                    </div>

                    <div className={styles.painPoint}>
                        <div className={`${styles.painPointIcon} ${styles.painPointIconAmber}`}>
                            <i className="fas fa-file-alt" />
                        </div>
                        <div className={styles.painPointBody}>
                            <div className={styles.painPointTop}>
                                <span className={styles.painPointName}>Báo cáo quyết toán phức tạp</span>
                                <span className={`${styles.statusBadge} ${styles.statusBadgeWarning}`}>
                                    <i className="fas fa-clock" /> Rủi ro trễ hạn
                                </span>
                            </div>
                            <div className={styles.painPointDesc}>Lập báo cáo quyết toán hải quan phức tạp, rủi ro trễ hạn</div>
                        </div>
                    </div>

                    <div className={styles.painPoint}>
                        <div className={`${styles.painPointIcon} ${styles.painPointIconPurple}`}>
                            <i className="fas fa-search" />
                        </div>
                        <div className={styles.painPointBody}>
                            <div className={styles.painPointTop}>
                                <span className={styles.painPointName}>Khó phát hiện bất thường</span>
                                <span className={`${styles.statusBadge} ${styles.statusBadgeWarning}`}>
                                    <i className="fas fa-exclamation-triangle" /> Rủi ro cao
                                </span>
                            </div>
                            <div className={styles.painPointDesc}>Khó phát hiện bất thường (HS Code, đơn giá, đơn vị tính) trước khi hải quan kiểm tra</div>
                        </div>
                    </div>

                    <div className={styles.painPoint}>
                        <div className={`${styles.painPointIcon} ${styles.painPointIconBlue}`}>
                            <i className="fas fa-calculator" />
                        </div>
                        <div className={styles.painPointBody}>
                            <div className={styles.painPointTop}>
                                <span className={styles.painPointName}>Tính định mức không đồng bộ</span>
                                <span className={`${styles.statusBadge} ${styles.statusBadgeWarning}`}>
                                    <i className="fas fa-sync-alt" /> Không đồng bộ
                                </span>
                            </div>
                            <div className={styles.painPointDesc}>Tính định mức thực tế không đồng bộ với dữ liệu sản xuất</div>
                        </div>
                    </div>
                </div>

                {/* Right: Workflow diagram */}
                <div className={styles.workflow}>
                    <div className={styles.workflowTitle}>
                        <i className="fas fa-project-diagram" />Quy trình thủ công hiện tại
                    </div>

                    <div className={styles.workflowDiagram}>
                        {/* Row 1 */}
                        <div className={`${styles.wfStep} ${styles.wfStepDefault}`}>
                            <div className={`${styles.wfStepIcon} ${styles.wfStepIconBlue}`}><i className="fas fa-database" /></div>
                            <div>
                                <div className={styles.wfStepLabel}>ERP Data</div>
                                <div className={styles.wfStepSub}>Dữ liệu từ ERP</div>
                            </div>
                        </div>
                        <div className={`${styles.wfStep} ${styles.wfStepWarning}`}>
                            <div className={`${styles.wfStepIcon} ${styles.wfStepIconAmber}`}><i className="fas fa-file-excel" /></div>
                            <div>
                                <div className={styles.wfStepLabel}>Excel</div>
                                <div className={styles.wfStepSub}>Xử lý thủ công</div>
                            </div>
                        </div>

                        {/* Row 2: arrows */}
                        <div className={styles.wfArrow}><i className="fas fa-arrow-down" /></div>
                        <div className={styles.wfArrow}><i className="fas fa-arrow-down" /></div>

                        {/* Row 3 */}
                        <div className={`${styles.wfStep} ${styles.wfStepDefault}`}>
                            <div className={`${styles.wfStepIcon} ${styles.wfStepIconBlue}`}><i className="fas fa-file-contract" /></div>
                            <div>
                                <div className={styles.wfStepLabel}>Báo cáo</div>
                                <div className={styles.wfStepSub}>Tạo báo cáo</div>
                            </div>
                        </div>
                        <div className={`${styles.wfStep} ${styles.wfStepError}`}>
                            <div className={`${styles.wfStepIcon} ${styles.wfStepIconRed}`}><i className="fas fa-exclamation-triangle" /></div>
                            <div>
                                <div className={styles.wfStepLabel}>Bất thường</div>
                                <div className={styles.wfStepSub}>Phát hiện lỗi</div>
                            </div>
                        </div>

                        {/* Row 4: arrows */}
                        <div className={styles.wfArrow}><i className="fas fa-arrow-down" /></div>
                        <div className={styles.wfArrow}><i className="fas fa-arrow-down" /></div>

                        {/* Row 5: completion */}
                        <div className={`${styles.wfStep} ${styles.wfStepSuccess}`}>
                            <div className={`${styles.wfStepIcon} ${styles.wfStepIconGreen}`}><i className="fas fa-check" /></div>
                            <div>
                                <div className={styles.wfStepLabel}>Hoàn thành</div>
                                <div className={styles.wfStepSub}>Xuất báo cáo</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.workflowLegend}>
                        <div className={styles.legendItem}>
                            <div className={`${styles.legendItemDot} ${styles.legendItemDotRed}`} />
                            <span className={styles.legendItemText}>Điểm đau</span>
                        </div>
                        <div className={styles.legendItem}>
                            <div className={`${styles.legendItemDot} ${styles.legendItemDotAmber}`} />
                            <span className={styles.legendItemText}>Cảnh báo</span>
                        </div>
                        <div className={styles.legendItem}>
                            <div className={`${styles.legendItemDot} ${styles.legendItemDotBlue}`} />
                            <span className={styles.legendItemText}>Bình thường</span>
                        </div>
                    </div>
                </div>
            </div>

            <Footer text="Các vấn đề này cần được giải quyết để tối ưu hóa quy trình hải quan" />
        </SlideLayout>
    );
}
