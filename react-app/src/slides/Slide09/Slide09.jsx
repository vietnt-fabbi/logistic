import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import ScreenshotFrame from '../../components/common/ScreenshotFrame';
import styles from './Slide09.module.css';

export default function Slide09() {
    return (
        <SlideLayout>
            <Header
                title="ERP Daily: Dữ liệu chi tiết theo ngày"
                icon="fas fa-calendar-day"
                iconColor="#3b82f6"
                subtitle="Xem chi tiết từng transaction theo ngày — phân loại theo RM, Semi, FG"
            />

            {/* Body */}
            <div className={styles.body}>
                {/* Left: Main Screenshot */}
                <div className={styles.contentLeft}>
                    <ScreenshotFrame
                        src="./images/slide-9.1 - list erp daily.jpg"
                        alt="List ERP Daily"
                        title="Danh sách ERP Daily — Tab RM-152"
                        titleIcon="fas fa-list"
                        titleIconColor="#3b82f6"
                    />
                    <div className={styles.benefitCallout}>
                        <div className={styles.benefitCalloutIcon}>
                            <i className="fas fa-lightbulb" />
                        </div>
                        <div className={styles.benefitCalloutText}>
                            <strong>Dữ liệu chi tiết theo ngày</strong> — phục vụ tính toán BOM thực tế chính xác, cùng cơ chế upload + mapping động như ERP Summary
                        </div>
                    </div>
                </div>

                {/* Right: Filter + Features */}
                <div className={styles.contentRight}>
                    {/* Filter Screenshot */}
                    <div className={styles.filterPanel}>
                        <div className={styles.filterPanelHeader}>
                            <div className={styles.filterPanelTitle}>
                                <i className={`fas fa-filter ${styles.iconAmber}`} />
                                Bộ lọc nâng cao
                            </div>
                        </div>
                        <div className={styles.filterPanelImg}>
                            <img src="./images/slide-9.2 - filter.jpg" alt="Filter" />
                        </div>
                    </div>

                    {/* Filter Features */}
                    <div className={styles.infoCard}>
                        <div className={styles.infoCardTitle}>
                            <i className={`fas fa-search ${styles.iconBlue} ${styles.iconMd}`} />
                            Lọc theo 20+ trường dữ liệu
                        </div>
                        <div className={styles.infoCardList}>
                            <div className={styles.infoCardItem}>
                                <i className={`fas fa-check ${styles.iconGreen} ${styles.iconXs}`} />
                                Item, Item Description
                            </div>
                            <div className={styles.infoCardItem}>
                                <i className={`fas fa-check ${styles.iconGreen} ${styles.iconXs}`} />
                                Storage Location, Movement Date
                            </div>
                            <div className={styles.infoCardItem}>
                                <i className={`fas fa-check ${styles.iconGreen} ${styles.iconXs}`} />
                                Quantity, Expense, LOT No
                            </div>
                            <div className={styles.infoCardItem}>
                                <i className={`fas fa-check ${styles.iconGreen} ${styles.iconXs}`} />
                                Transaction Type, P/O No, S/O No
                            </div>
                        </div>
                    </div>

                    {/* Tab Benefits */}
                    <div className={styles.infoCard}>
                        <div className={styles.infoCardTitle}>
                            <i className={`fas fa-layer-group ${styles.iconPurple} ${styles.iconMd}`} />
                            Lợi ích phân tab
                        </div>
                        <div className={styles.infoCardList}>
                            <div className={styles.infoCardItem}>
                                <i className={`fas fa-check ${styles.iconGreen} ${styles.iconXs}`} />
                                Tách biệt NVL, bán TP, thành phẩm
                            </div>
                            <div className={styles.infoCardItem}>
                                <i className={`fas fa-check ${styles.iconGreen} ${styles.iconXs}`} />
                                Upload riêng theo từng loại
                            </div>
                            <div className={styles.infoCardItem}>
                                <i className={`fas fa-check ${styles.iconGreen} ${styles.iconXs}`} />
                                Đối soát chính xác từng nhóm
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer text="Dữ liệu chi tiết theo ngày — phân loại RM-152 (NVL), Semi-154 (Bán TP), FG-155 (Thành phẩm)" />
        </SlideLayout>
    );
}
