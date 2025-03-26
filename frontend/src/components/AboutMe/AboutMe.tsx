import styles from './AboutMe.module.css'
import jonahProfileImg from '../../assets/jonahProfileImg.jpeg'

const AboutMe: React.FC = () => {

    const technologies = ['TypeScript', 'JavaScript', 'ReactJS', 'Angular', 'FastAPI', 'ExpressJS', 'Redis', 'Firebase',
        'Spring', 'Python', 'Cypress'];


    return (
        <section className={styles.aboutMeContainer} id='about'>
            <div className={styles.aboutMeWrapper}>
                <div className={styles.contentContainer}>
                    <div className={styles.contentHeader}><span className={styles.accentColor}>01.</span>About Me <hr style={{ width: '50%' }} /></div>
                    <div className={styles.contentWrapper}>
                        <div className={styles.contentSection}>Hello! My name is Jonah. I enjoy developing user-friendly
                            and engaging web applications. I took interest in programming after taking a statistics course at PLU
                            that taught me how to use R and RStudio.</div>
                        <div className={styles.contentSection}>As of today, I have graduated from PLU with bachelors in <span className={styles.accentColor}>computer science</span> and <span className={styles.accentColor}>finance</span>, and am
                            pursuing full time job opportunities in <span className={styles.accentColor}> software engineering</span>
                        </div>
                        <div className={styles.contentSection}>In recent months, I interned with Onyx AI, a startup originating from Duke University. At Onyx AI I worked on <span className={styles.accentColor}>SavvyCSV</span>, which is a web application that curates CSV files using prompt-engineering with OpenAI's API and various web-scrapping technologies.
                        </div>
                        <div className={styles.contentSection}>Some technologies I have been using recently:</div>
                        <div className={styles.skillsList}>
                            <ul className={styles.ul}>
                                {technologies.map((technology) =>
                                    <li className={styles.li}>{technology}</li>
                                )}
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