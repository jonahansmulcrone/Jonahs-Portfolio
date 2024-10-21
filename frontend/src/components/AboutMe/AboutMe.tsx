import styles from './AboutMe.module.css'
import jonahProfileImg from '../../assets/jonahProfileImg.jpeg'

const AboutMe: React.FC = () => {
    return (
        <section className={styles.aboutMeContainer}>
            <div className={styles.aboutMeWrapper}>
                <div className={styles.contentContainer}>
                    <div className={styles.contentHeader}><span className={styles.accentColor}>01.</span>About Me <hr style={{ width: '50%' }} /></div>
                    <div className={styles.contentWrapper}>
                        <div className={styles.contentSection}>Hello! My name is Jonah. I enjoy developing user-friendly
                            and engaging web applications. I took interest in programming after taking a statistics course at PLU
                            that taught me how to use R and RStudio.</div>
                        <div className={styles.contentSection}>As of today, I have graduated from PLU with bachelors in computer science and finance, and am
                            interning as a <span className={styles.accentColorTwo}>fullstack software engineer</span> for Pierce County. 
                        </div>
                        <div className={styles.contentSection}>I have also been working on a startup project, SavvyCSV, where I led the transition to a more modern and user-friendly 
                            frontend application in ReactJS <span className={styles.accentColorTwo}>fullstack software engineer</span> for Pierce County. 
                        </div>
                        <div className={styles.skillsList}>
                            <ul className={styles.ul}>
                                <li className={styles.li}>Typscript</li>
                                <li className={styles.li}>Javascript</li>
                                <li className={styles.li}>ReactJS</li>
                                <li className={styles.li}>Firebase</li>
                                <li className={styles.li}>Spring</li>
                                <li className={styles.li}>Python</li>
                                <li className={styles.li}>Cypress</li>
                                <li className={styles.li}>Selenium</li>
                                <li className={styles.li}>AngularJS</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.photoContainer}>
                    <img src={jonahProfileImg} />
                </div>
            </div>
        </section>
    );
}

export default AboutMe