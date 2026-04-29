import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { useT } from '../../i18n/useLanguage';
import styles from './Slide08.module.css';

export default function Slide08() {
    const t = useT();
    return (
        <SlideLayout>
            <Header
                title={t('slide08.title')}
                icon="fas fa-table"
                iconColor="#3b82f6"
                subtitle={t('slide08.subtitle')}
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
                        <strong>{t('slide08.calloutBold')}</strong> — {t('slide08.calloutText')}
                    </div>
                </div>
            </div>

            <Footer text={t('slide08.footer')} />
        </SlideLayout>
    );
}
