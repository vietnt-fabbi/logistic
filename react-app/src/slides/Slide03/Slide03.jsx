import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import styles from './Slide03.module.css';

const STEPS = [
    { num: 'Bước 1', icon: 'fas fa-database', title: 'ERP Data', sub: 'Dữ liệu từ ERP', desc: 'Upload dữ liệu từ hệ thống ERP' },
    { num: 'Bước 2', icon: 'fas fa-upload', title: 'Upload & Mapping', sub: 'Đồng bộ dữ liệu', desc: 'Mapping động, tự động nhận diện' },
    { num: 'Bước 3', icon: 'fas fa-calculator', title: 'Tính toán BOM', sub: 'Định mức thực tế', desc: 'Tính toán BOM tự động' },
    { num: 'Bước 4', icon: 'fas fa-file-contract', title: 'Báo cáo HQ', sub: 'Xuất báo cáo', desc: 'Báo cáo hải quan chuẩn' },
    { num: 'Bước 5', icon: 'fas fa-exclamation-triangle', title: 'Phát hiện lỗi', sub: 'Kiểm tra bất thường', desc: 'Phát hiện bất thường tự động' },
];

const MODULES = [
    { icon: 'fas fa-tachometer-alt', title: 'Dashboard', sub: 'Tổng quan', desc: 'Theo dõi tình trạng mapping ERP ↔ ECUS' },
    { icon: 'fas fa-upload', title: 'Upload ERP', sub: 'Đồng bộ dữ liệu', desc: 'Upload file trực tiếp từ ERP' },
    { icon: 'fas fa-calculator', title: 'Actual BOM', sub: 'Định mức thực tế', desc: 'Tính toán BOM tự động' },
    { icon: 'fas fa-file-contract', title: 'Annual Report', sub: 'Báo cáo hải quan', desc: 'Xuất báo cáo theo mẫu HQ' },
    { icon: 'fas fa-exclamation-triangle', title: 'Issue Report', sub: 'Phát hiện lỗi', desc: 'Phát hiện bất thường tự động' },
];

export default function Slide03() {
    return (
        <SlideLayout>
            <Header
                title="Giải pháp tổng quan"
                icon="fas fa-sitemap"
                iconColor="#3b82f6"
                subtitle="Hệ thống quản lý quyết toán hải quan tự động - 5 module chính"
            />

            <div className={styles.body}>
                {/* 5-Step Flow */}
                <div className={styles.stepFlow}>
                    {STEPS.map((step, i) => (
                        <div key={i} style={{ display: 'contents' }}>
                            <div className={styles.stepCard}>
                                <div className={styles.stepCardNumber}>{step.num}</div>
                                <div className={styles.stepCardHeader}>
                                    <div className={styles.stepCardIcon}><i className={step.icon} /></div>
                                    <div>
                                        <div className={styles.stepCardTitle}>{step.title}</div>
                                        <div className={styles.stepCardSub}>{step.sub}</div>
                                    </div>
                                </div>
                                <div className={styles.stepCardDesc}>{step.desc}</div>
                                <div className={styles.stepCardBadge}>
                                    <span className={styles.moduleBadge}><i className="fas fa-check-circle" /> Active</span>
                                </div>
                            </div>
                            {i < STEPS.length - 1 && (
                                <div className={styles.stepArrow}><div className={styles.stepArrowLine} /></div>
                            )}
                        </div>
                    ))}
                </div>

                {/* 5 Module Cards Grid */}
                <div className={styles.moduleGrid}>
                    {MODULES.map((mod, i) => (
                        <div key={i} className={styles.moduleCard}>
                            <div className={styles.moduleCardHeader}>
                                <div className={styles.moduleCardIcon}><i className={mod.icon} /></div>
                                <div>
                                    <div className={styles.moduleCardTitle}>{mod.title}</div>
                                    <div className={styles.moduleCardSub}>{mod.sub}</div>
                                </div>
                            </div>
                            <div className={styles.moduleCardDesc}>{mod.desc}</div>
                            <div className={styles.moduleCardBadge}>
                                <span className={styles.moduleBadge}><i className="fas fa-check" /> Ready</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer text="Hệ thống tự động hóa 5 module chính cho quản lý hải quan" />
        </SlideLayout>
    );
}
