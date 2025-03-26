import styles from './LandingPage.module.css';
import { ReactTyped } from 'react-typed';
import resume from '../../assets/Jonah_Mulcrone_CV.pdf';

const LandingPage: React.FC = () => {
    return (
        <section className={styles.landingPageContainer}>
            <div className={styles.landingPageContent}>
                <span className={styles.hello}>Hi, my name is</span>
                <h2><span className={styles.name}>
                    Jonah Mulcrone
                </span>
                </h2>
                <span className={styles.occupation}>
                    <ReactTyped
                        strings={["I am a software developer."]}
                        typeSpeed={25}
                        backSpeed={40}
                        showCursor={true}
                    />
                </span>
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