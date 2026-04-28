import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import styles from './Slide04.module.css';

export default function Slide04() {
    return (
        <SlideLayout>
            <Header
                title="Dashboard: Tổng quan"
                icon="fas fa-tachometer-alt"
                iconColor="#3b82f6"
                subtitle="Nắm toàn bộ dữ liệu hải quan trong một màn hình"
            />

            <div className={styles.body}>
                <img src="/images/slide-4.jpg" alt="Dashboard Tổng quan" className={styles.screenshot} />
            </div>

            <Footer text="Dashboard cung cấp tổng quan toàn bộ dữ liệu hải quan trong một màn hình" />
        </SlideLayout>
    );
}
