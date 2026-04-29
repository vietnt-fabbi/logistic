import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { useT } from '../../i18n/useLanguage';
import styles from './Slide04.module.css';

export default function Slide04() {
    const t = useT();
    return (
        <SlideLayout>
            <Header
                title={t('slide04.title')}
                icon="fas fa-tachometer-alt"
                iconColor="#3b82f6"
                subtitle={t('slide04.subtitle')}
            />

            <div className={styles.body}>
                <img src="./images/slide-4.jpg" alt={t('slide04.title')} className={styles.screenshot} />
            </div>

            <Footer text={t('slide04.footer')} />
        </SlideLayout>
    );
}
