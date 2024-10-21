import TabGroup from './components/TabGroup';
import styles from './Experience.module.css'

const Experience: React.FC = () => {
    return (
        <section className={styles.experienceContainer}>
            <div className={styles.experienceWrapper}>
                <div className={styles.headerWrapper}>
                <div className={styles.experienceHeader}><span className={styles.accentColor}>02.</span>My Experience <hr style={{ width: '45%' }} /></div>
                </div>
                <TabGroup />
            </div>
        </section>
    );
}

export default Experience