import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { useT } from '../../i18n/useLanguage';
import styles from './Slide13.module.css';

export default function Slide13() {
    const t = useT();
    return (
        <SlideLayout theme="light">
            <Header
                title={t('slide13.title')}
                icon="fas fa-balance-scale"
                iconColor="#3b82f6"
                subtitle={t('slide13.subtitle')}
            />

            <div className={styles.body}>
                {/* Screenshot */}
                <div className={styles.tablePanel}>
                    <div className={styles.tableHeader}>
                        <div className={styles.tableTitle}>
                            <i className="fas fa-columns" />
                            {t('slide13.tableTitle')}
                        </div>
                    </div>
                    <div className={styles.screenshotFrame}>
                        <img src="./images/slide-13 - list actual bom.jpg" alt="List Actual BOM" />
                    </div>
                </div>

                {/* Sidebar */}
                <div className={styles.sidebar}>
                    <div className={styles.card}>
                        <div className={styles.cardTitle}><i className="fas fa-star" style={{ color: '#f59e0b' }} />{t('slide13.cardTitle')}</div>
                        <div className={styles.featureItem}>
                            <i className="fas fa-cubes" style={{ color: '#3b82f6' }} />
                            <span dangerouslySetInnerHTML={{ __html: t('slide13.feat1') }} />
                        </div>
                        <div className={styles.featureItem}>
                            <i className="fas fa-tags" style={{ color: '#3b82f6' }} />
                            <span dangerouslySetInnerHTML={{ __html: t('slide13.feat2') }} />
                        </div>
                        <div className={styles.featureItem}>
                            <i className="fas fa-percentage" style={{ color: '#3b82f6' }} />
                            <span dangerouslySetInnerHTML={{ __html: t('slide13.feat3') }} />
                        </div>
                        <div className={styles.featureItem}>
                            <i className="fas fa-file-excel" style={{ color: '#3b82f6' }} />
                            <span dangerouslySetInnerHTML={{ __html: t('slide13.feat4') }} />
                        </div>
                    </div>

                    <div className={styles.benefit}>
                        <div className={styles.benefitIcon}>
                            <i className="fas fa-shield-alt" style={{ color: '#3b82f6' }} />
                        </div>
                        <div className={styles.benefitText}>
                            {t('slide13.benefitText')}
                        </div>
                    </div>
                </div>
            </div>

            <Footer text={t('slide13.footer')} />
        </SlideLayout>
    );
}
