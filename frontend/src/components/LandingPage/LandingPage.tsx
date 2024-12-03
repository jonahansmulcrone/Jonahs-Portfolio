import styles from './LandingPage.module.css';
import resume from '../../assets/Jonah_Mulcrone_CV_Pierce_County.pdf';

const LandingPage: React.FC = () => {
    return (
        <section className={styles.landingPageContainer}>
            <div className={styles.landingPageContent}>
                <span className={styles.hello}>Hi, my name is</span>
                <h2><span className={styles.name}>Jonah Mulcrone.</span></h2>
                <span className={styles.occupation}>I am a software developer</span>
                <div className={styles.buttonWrapper}>
                    <a href={resume} target="_blank">
                        <button>See my Resume!</button>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default LandingPage