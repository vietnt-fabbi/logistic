import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import styles from './Slide18.module.css';

export default function Slide18() {
    return (
        <SlideLayout>
            <Header
                title="Issue Report: Tổng quan"
                icon="fas fa-exclamation-triangle"
                iconColor="#f59e0b"
                subtitle="Phát hiện bất thường trước khi hải quan phát hiện"
            />

            {/* 5 Issue Type Cards */}
            <div className={styles.cardsGrid}>
                <div className={`${styles.issueCard} ${styles.issueCardRed}`}>
                    <div className={`${styles.issueCardIcon} ${styles.issueCardIconRed}`}>
                        <i className="fas fa-barcode" />
                    </div>
                    <div className={styles.issueCardName}>HS Code</div>
                    <div className={styles.issueCardDesc}>Mã hàng gắn nhiều HS Code khác nhau</div>
                </div>

                <div className={`${styles.issueCard} ${styles.issueCardAmber}`}>
                    <div className={`${styles.issueCardIcon} ${styles.issueCardIconAmber}`}>
                        <i className="fas fa-ruler" />
                    </div>
                    <div className={styles.issueCardName}>Unit</div>
                    <div className={styles.issueCardDesc}>Nhiều đơn vị tính cho cùng mã hàng</div>
                </div>

                <div className={`${styles.issueCard} ${styles.issueCardPurple}`}>
                    <div className={`${styles.issueCardIcon} ${styles.issueCardIconPurple}`}>
                        <i className="fas fa-dollar-sign" />
                    </div>
                    <div className={styles.issueCardName}>Unit Price</div>
                    <div className={styles.issueCardDesc}>Nhiều đơn giá cho cùng mã hàng</div>
                </div>

                <div className={`${styles.issueCard} ${styles.issueCardBlue}`}>
                    <div className={`${styles.issueCardIcon} ${styles.issueCardIconBlue}`}>
                        <i className="fas fa-sitemap" />
                    </div>
                    <div className={styles.issueCardName}>BOM</div>
                    <div className={styles.issueCardDesc}>Bất thường trong định mức sản xuất</div>
                </div>

                <div className={`${styles.issueCard} ${styles.issueCardOrange}`}>
                    <div className={`${styles.issueCardIcon} ${styles.issueCardIconOrange}`}>
                        <i className="fas fa-industry" />
                    </div>
                    <div className={styles.issueCardName}>Production</div>
                    <div className={styles.issueCardDesc}>Chênh lệch NVL định mức vs thực tế</div>
                </div>
            </div>

            {/* Benefits & Summary */}
            <div className={styles.body}>
                {/* Benefits */}
                <div className={styles.panel}>
                    <div className={styles.panelTitle}>
                        <i className="fas fa-shield-alt" style={{ color: '#10b981' }} />
                        Lợi ích
                    </div>
                    <div className={styles.benefitList}>
                        <div className={`${styles.benefitItem} ${styles.benefitItemGreen}`}>
                            <div className={`${styles.benefitItemIcon} ${styles.benefitItemIconGreen}`}>
                                <i className="fas fa-search" />
                            </div>
                            <div>
                                <div className={styles.benefitItemLabel}>Chủ động rà soát</div>
                                <div className={styles.benefitItemDesc}>Giảm rủi ro phạt/truy thu từ hải quan</div>
                            </div>
                        </div>
                        <div className={`${styles.benefitItem} ${styles.benefitItemBlue}`}>
                            <div className={`${styles.benefitItemIcon} ${styles.benefitItemIconBlue}`}>
                                <i className="fas fa-tags" />
                            </div>
                            <div>
                                <div className={styles.benefitItemLabel}>Phân loại rõ ràng</div>
                                <div className={styles.benefitItemDesc}>5 loại issue, dễ dàng xử lý theo thứ tự ưu tiên</div>
                            </div>
                        </div>
                        <div className={`${styles.benefitItem} ${styles.benefitItemPurple}`}>
                            <div className={`${styles.benefitItemIcon} ${styles.benefitItemIconPurple}`}>
                                <i className="fas fa-file-export" />
                            </div>
                            <div>
                                <div className={styles.benefitItemLabel}>Export để xử lý</div>
                                <div className={styles.benefitItemDesc}>Xem chi tiết + export danh sách issue</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer text="Hệ thống tự động quét và phân loại 5 loại vấn đề phát sinh trong dữ liệu" />
        </SlideLayout>
    );
}
