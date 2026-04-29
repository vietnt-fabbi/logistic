import SlideLayout from '../../components/SlideLayout/SlideLayout';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { useT } from '../../i18n/useLanguage';
import styles from './Slide03.module.css';

export default function Slide03() {
    const t = useT();
    const STEPS = [
        { num: `${t('slide03.step')} 1`, icon: 'fas fa-database', title: t('slide03.step1Title'), sub: t('slide03.step1Sub'), desc: t('slide03.step1Desc') },
        { num: `${t('slide03.step')} 2`, icon: 'fas fa-upload', title: t('slide03.step2Title'), sub: t('slide03.step2Sub'), desc: t('slide03.step2Desc') },
        { num: `${t('slide03.step')} 3`, icon: 'fas fa-calculator', title: t('slide03.step3Title'), sub: t('slide03.step3Sub'), desc: t('slide03.step3Desc') },
        { num: `${t('slide03.step')} 4`, icon: 'fas fa-file-contract', title: t('slide03.step4Title'), sub: t('slide03.step4Sub'), desc: t('slide03.step4Desc') },
        { num: `${t('slide03.step')} 5`, icon: 'fas fa-exclamation-triangle', title: t('slide03.step5Title'), sub: t('slide03.step5Sub'), desc: t('slide03.step5Desc') },
    ];

    const MODULES = [
        { icon: 'fas fa-tachometer-alt', title: t('slide03.mod1Title'), sub: t('slide03.mod1Sub'), desc: t('slide03.mod1Desc') },
        { icon: 'fas fa-upload', title: t('slide03.mod2Title'), sub: t('slide03.mod2Sub'), desc: t('slide03.mod2Desc') },
        { icon: 'fas fa-calculator', title: t('slide03.mod3Title'), sub: t('slide03.mod3Sub'), desc: t('slide03.mod3Desc') },
        { icon: 'fas fa-file-contract', title: t('slide03.mod4Title'), sub: t('slide03.mod4Sub'), desc: t('slide03.mod4Desc') },
        { icon: 'fas fa-exclamation-triangle', title: t('slide03.mod5Title'), sub: t('slide03.mod5Sub'), desc: t('slide03.mod5Desc') },
    ];

    return (
        <SlideLayout>
            <Header
                title={t('slide03.title')}
                icon="fas fa-sitemap"
                iconColor="#3b82f6"
                subtitle={t('slide03.subtitle')}
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

            <Footer text={t('slide03.footer')} />
        </SlideLayout>
    );
}
