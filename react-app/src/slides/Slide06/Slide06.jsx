import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import styles from './Slide06.module.css';

export default function Slide06() {
    return (
        <SlideLayout>
            <Header
                title="Dashboard: Export & Lưu trữ"
                icon="fas fa-download"
                iconColor="#3b82f6"
                subtitle="Xuất file hình ảnh dashboard tiện lợi cho báo cáo và lưu hồ sơ"
            />

            <div className={styles.body}>
                {/* Left: Dashboard Screenshot */}
                <div className={styles.bodyLeft}>
                    <div className={styles.screenshotCard}>
                        <div className={styles.screenshotCardHeader}>
                            <div className={styles.screenshotCardTitle}>
                                <i className={`fas fa-chart-area ${styles.screenshotCardTitleIcon}`} />
                                Dashboard — Tax & Fee Trends
                            </div>
                        </div>
                        <div className={styles.screenshotCardImgWrap}>
                            <img src="./images/slide-6.jpg" alt="Dashboard Export Preview" className={styles.screenshotCardImg} />
                        </div>
                    </div>
                    {/* Workflow */}
                    <div className={styles.workflow}>
                        <div className={styles.workflowStep}>
                            <div className={styles.workflowStepIcon}><i className="fas fa-tachometer-alt" /></div>
                            <span className={styles.workflowStepLabel}>Dashboard</span>
                        </div>
                        <i className={`fas fa-arrow-right ${styles.workflowArrow}`} />
                        <div className={styles.workflowStep}>
                            <div className={styles.workflowStepIcon}><i className="fas fa-image" /></div>
                            <span className={styles.workflowStepLabel}>Export PNG</span>
                        </div>
                        <i className={`fas fa-arrow-right ${styles.workflowArrow}`} />
                        <div className={styles.workflowTargets}>
                            <div className={styles.workflowTarget}>
                                <i className={`fas fa-envelope ${styles.workflowTargetIcon}`} /> Email
                            </div>
                            <div className={styles.workflowTarget}>
                                <i className={`fas fa-file-alt ${styles.workflowTargetIcon}`} /> Báo cáo
                            </div>
                            <div className={styles.workflowTarget}>
                                <i className={`fas fa-archive ${styles.workflowTargetIcon}`} /> Lưu trữ
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Feature Description */}
                <div className={styles.bodyRight}>
                    <div className={styles.featureCard}>
                        <div className={styles.featureCardHeader}>
                            <div className={styles.featureCardIcon}><i className="fas fa-image" /></div>
                            <div>
                                <div className={styles.featureCardTitle}>Export hình ảnh</div>
                                <div className={styles.featureCardSubtitle}>Xuất PNG chất lượng cao</div>
                            </div>
                        </div>
                        <div className={styles.featureCardText}>
                            Hỗ trợ xuất dashboard dưới dạng hình ảnh PNG, tiện lợi cho việc gửi email, đính kèm báo cáo, hoặc lưu hồ sơ nội bộ.
                        </div>
                        <div className={styles.featureCardChecks}>
                            <div className={styles.featureCardCheck}>
                                <i className={`fas fa-check-circle ${styles.featureCardCheckIcon}`} />
                                Chất lượng cao, rõ nét
                            </div>
                            <div className={styles.featureCardCheck}>
                                <i className={`fas fa-check-circle ${styles.featureCardCheckIcon}`} />
                                Một click xuất nhanh
                            </div>
                            <div className={styles.featureCardCheck}>
                                <i className={`fas fa-check-circle ${styles.featureCardCheckIcon}`} />
                                Tự động đặt tên theo kỳ
                            </div>
                        </div>
                    </div>

                    <div className={styles.featureCard}>
                        <div className={styles.usecaseTitle}>
                            <i className={`fas fa-th-large ${styles.usecaseTitleIcon}`} />
                            Ứng dụng
                        </div>
                        <div className={styles.usecaseList}>
                            <div className={`${styles.usecaseItem} ${styles.usecaseItemBlue}`}>
                                <div className={`${styles.usecaseItemIcon} ${styles.usecaseItemIconBlue}`}><i className="fas fa-envelope" /></div>
                                <div>
                                    <div className={styles.usecaseItemTitle}>Gửi email báo cáo</div>
                                    <div className={styles.usecaseItemDesc}>Đính kèm ảnh dashboard nhanh chóng</div>
                                </div>
                            </div>
                            <div className={`${styles.usecaseItem} ${styles.usecaseItemGreen}`}>
                                <div className={`${styles.usecaseItemIcon} ${styles.usecaseItemIconGreen}`}><i className="fas fa-desktop" /></div>
                                <div>
                                    <div className={styles.usecaseItemTitle}>Trình chiếu nội bộ</div>
                                    <div className={styles.usecaseItemDesc}>Chèn vào slide PowerPoint</div>
                                </div>
                            </div>
                            <div className={`${styles.usecaseItem} ${styles.usecaseItemPurple}`}>
                                <div className={`${styles.usecaseItemIcon} ${styles.usecaseItemIconPurple}`}><i className="fas fa-folder-open" /></div>
                                <div>
                                    <div className={styles.usecaseItemTitle}>Lưu hồ sơ</div>
                                    <div className={styles.usecaseItemDesc}>Lưu trữ theo kỳ báo cáo</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer text="Hỗ trợ xuất file hình ảnh dashboard tiện lợi cho báo cáo nội bộ và lưu hồ sơ" />
        </SlideLayout>
    );
}
