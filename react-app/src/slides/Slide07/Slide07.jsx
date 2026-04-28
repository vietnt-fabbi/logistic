import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import styles from './Slide07.module.css';

export default function Slide07() {
    return (
        <SlideLayout>
            <Header
                title="Upload ERP: Tổng quan"
                icon="fas fa-upload"
                iconColor="#3b82f6"
                subtitle="Đồng bộ dữ liệu ERP chỉ trong vài bước"
            />

            <div className={styles.body}>
                {/* Benefits Row */}
                <div className={styles.benefits}>
                    <div className={styles.benefitCard}>
                        <div className={`${styles.benefitCardIcon} ${styles.benefitCardIconBlue}`}>
                            <i className={`fas fa-cloud-upload-alt ${styles.iconBlue} ${styles.iconLg}`} />
                        </div>
                        <div className={styles.benefitCardTitle}>Upload file trực tiếp</div>
                        <div className={styles.benefitCardDesc}>Upload file trực tiếp từ hệ thống ERP khách hàng, hỗ trợ nhiều format (Excel: .xlsx, .xls)</div>
                    </div>
                    <div className={styles.benefitCard}>
                        <div className={`${styles.benefitCardIcon} ${styles.benefitCardIconGreen}`}>
                            <i className={`fas fa-history ${styles.iconGreen} ${styles.iconLg}`} />
                        </div>
                        <div className={styles.benefitCardTitle}>Quản lý lịch sử theo kỳ</div>
                        <div className={styles.benefitCardDesc}>Quản lý lịch sử upload theo kỳ báo cáo — truy vết dễ dàng mọi thay đổi</div>
                    </div>
                    <div className={styles.benefitCard}>
                        <div className={`${styles.benefitCardIcon} ${styles.benefitCardIconPurple}`}>
                            <i className={`fas fa-random ${styles.iconPurple} ${styles.iconLg}`} />
                        </div>
                        <div className={styles.benefitCardTitle}>Mapping động linh hoạt</div>
                        <div className={styles.benefitCardDesc}>Mapping động: linh hoạt với mọi format dữ liệu ERP, không cần chỉnh file</div>
                    </div>
                </div>

                {/* Flow Diagram */}
                <div className={styles.flowPanel}>
                    <div className={styles.flowPanelTitle}>
                        <i className={`fas fa-project-diagram ${styles.iconBlue}`} />
                        Quy trình Upload & Đồng bộ dữ liệu
                    </div>
                    <div className={styles.flowSteps}>
                        {/* Step 1 */}
                        <div className={`${styles.flowStep} ${styles.flowStepBlue}`}>
                            <div className={`${styles.flowStepNum} ${styles.flowStepNumBlue}`}>1</div>
                            <div className={`${styles.flowStepIcon} ${styles.flowStepIconBlue}`}>
                                <i className={`fas fa-file-upload ${styles.iconBlue} ${styles.iconMd}`} />
                            </div>
                            <div className={styles.flowStepTitle}>Upload</div>
                            <div className={styles.flowStepDesc}>Chọn file từ ERP</div>
                        </div>
                        {/* Arrow */}
                        <div className={styles.flowArrow}>
                            <div className={`${styles.flowArrowLine} ${styles.flowArrowLineBlue}`} />
                            <i className={`fas fa-chevron-right ${styles.iconBlue} ${styles.iconSm}`} />
                        </div>
                        {/* Step 2 */}
                        <div className={`${styles.flowStep} ${styles.flowStepGreen}`}>
                            <div className={`${styles.flowStepNum} ${styles.flowStepNumGreen}`}>2</div>
                            <div className={`${styles.flowStepIcon} ${styles.flowStepIconGreen}`}>
                                <i className={`fas fa-arrows-alt-h ${styles.iconGreen} ${styles.iconMd}`} />
                            </div>
                            <div className={styles.flowStepTitle}>Mapping</div>
                            <div className={styles.flowStepDesc}>Mapping trường dữ liệu</div>
                        </div>
                        {/* Arrow */}
                        <div className={styles.flowArrow}>
                            <div className={`${styles.flowArrowLine} ${styles.flowArrowLineGreen}`} />
                            <i className={`fas fa-chevron-right ${styles.iconGreen} ${styles.iconSm}`} />
                        </div>
                        {/* Step 3 */}
                        <div className={`${styles.flowStep} ${styles.flowStepPurple}`}>
                            <div className={`${styles.flowStepNum} ${styles.flowStepNumPurple}`}>3</div>
                            <div className={`${styles.flowStepIcon} ${styles.flowStepIconPurple}`}>
                                <i className={`fas fa-check-circle ${styles.iconPurple} ${styles.iconMd}`} />
                            </div>
                            <div className={styles.flowStepTitle}>Xác nhận</div>
                            <div className={styles.flowStepDesc}>Kiểm tra & xác nhận</div>
                        </div>
                        {/* Arrow */}
                        <div className={styles.flowArrow}>
                            <div className={`${styles.flowArrowLine} ${styles.flowArrowLinePurple}`} />
                            <i className={`fas fa-chevron-right ${styles.iconPurple} ${styles.iconSm}`} />
                        </div>
                        {/* Step 4 */}
                        <div className={`${styles.flowStep} ${styles.flowStepAmber}`}>
                            <div className={`${styles.flowStepNum} ${styles.flowStepNumAmber}`}>4</div>
                            <div className={`${styles.flowStepIcon} ${styles.flowStepIconAmber}`}>
                                <i className={`fas fa-database ${styles.iconAmber} ${styles.iconMd}`} />
                            </div>
                            <div className={styles.flowStepTitle}>Lưu trữ</div>
                            <div className={styles.flowStepDesc}>Lưu vào hệ thống</div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer text="Module Upload ERP hỗ trợ 3 loại dữ liệu: ERP Summary, ERP Daily, ERP BOM" />
        </SlideLayout>
    );
}
