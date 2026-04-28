import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import styles from './Slide08.module.css';

export default function Slide08() {
    return (
        <SlideLayout>
            <Header
                title="ERP Summary: Dữ liệu tổng hợp"
                icon="fas fa-table"
                iconColor="#3b82f6"
                subtitle="Quản lý dữ liệu nhập–xuất–tồn theo từng mã hàng"
            />

            <div className={styles.body}>
                <div className={styles.screenshotWrap}>
                    <img src="./images/slide-8.1 - list erp summary.jpg" alt="ERP Summary" className={styles.screenshot} />
                </div>
                <div className={styles.benefitCallout}>
                    <div className={styles.benefitCalloutIcon}>
                        <i className="fas fa-lightbulb" />
                    </div>
                    <div className={styles.benefitCalloutText}>
                        <strong>Không cần chỉnh file thủ công</strong> — Upload file ERP gốc, hệ thống tự mapping trường dữ liệu
                    </div>
                </div>
            </div>

            <Footer text="Quản lý dữ liệu nhập–xuất–tồn ERP theo từng mã hàng" />
        </SlideLayout>
    );
}
