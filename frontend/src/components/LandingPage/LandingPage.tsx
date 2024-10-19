import styles from './LandingPage.module.css'

const LandingPage: React.FC = () => {
    return (
        <section className={styles.landingPageContainer}>
            <div className={styles.landingPageContent}>
                <span className={styles.hello}>Hi, my name is</span>
                <h2><span className={styles.name}>Jonah Mulcrone.</span></h2>
                <span className={styles.occupation}>I am a fullstack developer.</span>
                <span className={styles.description}>I recently graduated from Pacific
                    Lutheran University in Tacoma, Washington <br /> where I double majored
                    in Computer Science
                    and Finance.
                </span>
                <div className={styles.buttonWrapper}>
                    <button>Contact me!</button>
                </div>
            </div>
        </section>
    );
}

export default LandingPage