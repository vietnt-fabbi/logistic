import { slideList } from '../../slides';
import styles from './PrintView.module.css';

export default function PrintView() {
    return (
        <div className={styles.printRoot}>
            {slideList.map(({ id, component: SlideComponent }) => (
                <div key={id} className={styles.printSlide}>
                    <SlideComponent />
                </div>
            ))}
        </div>
    );
}
