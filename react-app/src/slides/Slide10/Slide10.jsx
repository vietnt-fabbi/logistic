import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import ScreenshotFrame from '../../components/common/ScreenshotFrame';
import { useT } from '../../i18n/useLanguage';
import styles from './Slide10.module.css';

export default function Slide10() {
    const t = useT();
    return (
        <SlideLayout theme="light">
            <Header
                title={t('slide10.title')}
                icon="fas fa-sitemap"
                iconColor="#3b82f6"
                subtitle={t('slide10.subtitle')}
            />

            <div className={styles.body}>
                {/* Left: Screenshot */}
                <div className={styles.bodyLeft}>
                    <ScreenshotFrame
                        src="./images/slide-10 - list erp bom.jpg"
                        alt="List ERP BOM"
                        title={t('slide10.screenshotTitle')}
                        titleIcon="fas fa-table"
                        titleIconColor="#3b82f6"
                        tags={[
                            { label: t('slide10.tag1'), bg: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' },
                            { label: t('slide10.tag2'), bg: 'rgba(16, 185, 129, 0.1)', color: '#10b981' },
                        ]}
                    />
                </div>

                {/* Right: Sidebar */}
                <div className={styles.bodyRight}>
                    {/* Features */}
                    <div className={styles.featureCard}>
                        <div className={styles.featureCardTitle}>
                            <i className="fas fa-list-check" />
                            {t('slide10.featureCardTitle')}
                        </div>
                        <div className={styles.featureItem}>
                            <i className="fas fa-check" />
                            {t('slide10.featureItem1')}
                        </div>
                        <div className={styles.featureItem}>
                            <i className="fas fa-check" />
                            {t('slide10.featureItem2')}
                        </div>
                        <div className={styles.featureItem}>
                            <i className="fas fa-check" />
                            {t('slide10.featureItem3')}
                        </div>
                        <div className={styles.featureItem}>
                            <i className="fas fa-check" />
                            {t('slide10.featureItem4')}
                        </div>
                        <div className={styles.featureItem}>
                            <i className="fas fa-check" />
                            {t('slide10.featureItem5')}
                        </div>
                    </div>

                    {/* Benefit */}
                    <div className={styles.benefit}>
                        <div className={styles.benefitIcon}>
                            <i className="fas fa-lightbulb" />
                        </div>
                        <div className={styles.benefitText}>
                            <strong>{t('slide10.benefitBold')}</strong> — {t('slide10.benefitText')}
                        </div>
                    </div>

                    {/* Upload info */}
                    <div className={styles.uploadInfo}>
                        <div className={styles.uploadInfoTitle}>
                            <i className="fas fa-cloud-upload-alt" />
                            {t('slide10.uploadTitle')}
                        </div>
                        <div className={styles.uploadStatus}>
                            <div className={styles.uploadStatusDot} />
                            {t('slide10.uploadStatus')}
                        </div>
                    </div>
                </div>
            </div>

            <Footer text={t('slide10.footer')} />
        </SlideLayout>
    );
}
