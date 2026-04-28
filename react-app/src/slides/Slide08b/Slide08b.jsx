import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import styles from './Slide08b.module.css';

export default function Slide08b() {
    return (
        <SlideLayout>
            <Header
                title="ERP Summary: Quy trình Upload & Mapping"
                icon="fas fa-project-diagram"
                iconColor="#3b82f6"
                subtitle="4 bước: Upload → Mapping → Preview → Lưu trữ lịch sử theo kỳ"
            />

            <div className={styles.body}>
                <div className={styles.flowLabel}>
                    <i className={`fas fa-project-diagram ${styles.iconBlue} ${styles.iconSm}`} />
                    <span className={styles.flowLabelText}>Quy trình Upload & Mapping</span>
                </div>

                <div className={styles.stepsGrid}>
                    <div className={styles.stepCard}>
                        <div className={`${styles.stepNum} ${styles.stepNumBlue}`}>1</div>
                        <div className={styles.stepCardImg}>
                            <img src="/images/slide-8.2 - upload file.jpg" alt="Upload File" />
                        </div>
                        <div className={styles.stepCardBody}>
                            <div className={styles.stepCardTitle}>Upload file</div>
                            <div className={styles.stepCardDesc}>Kéo thả hoặc chọn file XLS/XLSX</div>
                        </div>
                    </div>
                    <div className={styles.stepCard}>
                        <div className={`${styles.stepNum} ${styles.stepNumGreen}`}>2</div>
                        <div className={styles.stepCardImg}>
                            <img src="/images/slide-8.3 - mapping fields.jpg" alt="Mapping Fields" />
                        </div>
                        <div className={styles.stepCardBody}>
                            <div className={styles.stepCardTitle}>Mapping trường</div>
                            <div className={styles.stepCardDesc}>Map cột file ↔ cột hệ thống</div>
                        </div>
                    </div>
                    <div className={styles.stepCard}>
                        <div className={`${styles.stepNum} ${styles.stepNumAmber}`}>3</div>
                        <div className={styles.stepCardImg}>
                            <img src="/images/slide-8.4 - preview.jpg" alt="Preview Data" />
                        </div>
                        <div className={styles.stepCardBody}>
                            <div className={styles.stepCardTitle}>Preview & kiểm tra</div>
                            <div className={styles.stepCardDesc}>Xem trước dữ liệu, phát hiện lỗi</div>
                        </div>
                    </div>
                    <div className={styles.stepCard}>
                        <div className={`${styles.stepNum} ${styles.stepNumPurple}`}>4</div>
                        <div className={styles.stepCardImg}>
                            <img src="/images/slide-8.5 - file history.jpg" alt="File History" />
                        </div>
                        <div className={styles.stepCardBody}>
                            <div className={styles.stepCardTitle}>Lịch sử file</div>
                            <div className={styles.stepCardDesc}>Truy vết file upload theo kỳ</div>
                        </div>
                    </div>
                </div>

                <div className={styles.flowBar}>
                    <div className={styles.flowBarStep}>
                        <div className={`${styles.flowBarCircle} ${styles.bgBlue}`}>
                            <span className={styles.flowBarCircleText}>1</span>
                        </div>
                        <span className={styles.flowBarLabel}>Upload</span>
                    </div>
                    <i className={`fas fa-chevron-right ${styles.flowBarArrow}`} />
                    <div className={styles.flowBarStep}>
                        <div className={`${styles.flowBarCircle} ${styles.bgGreen}`}>
                            <span className={styles.flowBarCircleText}>2</span>
                        </div>
                        <span className={styles.flowBarLabel}>Mapping</span>
                    </div>
                    <i className={`fas fa-chevron-right ${styles.flowBarArrow}`} />
                    <div className={styles.flowBarStep}>
                        <div className={`${styles.flowBarCircle} ${styles.bgAmber}`}>
                            <span className={styles.flowBarCircleText}>3</span>
                        </div>
                        <span className={styles.flowBarLabel}>Preview</span>
                    </div>
                    <i className={`fas fa-chevron-right ${styles.flowBarArrow}`} />
                    <div className={styles.flowBarStep}>
                        <div className={`${styles.flowBarCircle} ${styles.bgPurple}`}>
                            <span className={styles.flowBarCircleText}>4</span>
                        </div>
                        <span className={styles.flowBarLabel}>History</span>
                    </div>
                </div>
            </div>

            <Footer text="Upload file → Mapping động → Preview & kiểm tra → Lưu trữ lịch sử theo kỳ" />
        </SlideLayout>
    );
}
