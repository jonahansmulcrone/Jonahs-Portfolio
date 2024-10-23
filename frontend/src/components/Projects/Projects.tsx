import ProjectCard from './components/ProjectCard';
import styles from './Projects.module.css'
import SavvyCSVImg from '../../assets/SavvyCSV.png'
import BusinessApp from '../../assets/Analytics-Service.png'

const Projects: React.FC = () => {
    return (
        <section className={styles.projectsContainer}>
            <div className={styles.projectsWrapper}>
                <div className={styles.headerWrapper}>
                    <div className={styles.projectsHeader}><span className={styles.accentColor}>03.</span>Some Recent Projects <hr style={{ width: '45%' }} /></div>
                </div>
                <ProjectCard
                    imgUrl={SavvyCSVImg}
                    projectDescription='Savvy CSV is a web application designed to effortlessly create the ideal CSV file through the use of webscrapping technologies and AI.'
                    projectTitle='SavvyCSV'
                    projectTechnologies={['ReactJS', 'Firebase', 'Typescript', 'AWS Lambda']}
                    alignment='right' />
                <ProjectCard
                    imgUrl={BusinessApp}
                    projectDescription='A personal financial management app that allows users to track and manage real-time expenses through the Plaid API.'
                    projectTitle='Financial Management App'
                    projectTechnologies={['ReactJS', 'Flask', 'Plaid API', 'SQL', 'Python', 'Typescript'
                    ]}
                    alignment='left' />
            </div>
        </section>
    );
}

export default Projects