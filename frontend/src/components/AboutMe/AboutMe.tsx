import styles from './AboutMe.module.css'

const AboutMe: React.FC = () => {
    return (
        <section className={styles.aboutMeContainer}>
            <div className={styles.aboutMeContent}>
                <span className={styles.hello}>Hi, my name is</span>
                <h2><span className={styles.name}>Jonah Mulcrone.</span></h2>
                <span className={styles.occupation}>I am a fullstack developer.</span>
                <span className={styles.description}>I recently graduated from Pacific 
                    Lutheran University in Tacoma, Washington <br /> where I double majored 
                    in Computer Science 
                    and Finance.
                </span>
                <button>Contact Me!</button>
            </div>
        </section>
    );
}

export default AboutMe