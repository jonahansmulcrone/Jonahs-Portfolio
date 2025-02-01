import ProjectCard from './components/ProjectCard';
import styles from './Projects.module.css';
import SavvyCSVImg from '../../assets/SavvyCSV.png';
import BusinessApp from '../../assets/Analytics-Service.png';
import HAHDSurveyImg from '../../assets/HAHDSurvey.png';
import SortingVisualizerImg from '../../assets/SortingVisualizer.png';
import MyPortfolio from '../../assets/MyPortfolio.png';
import GaryPortfolio from '../../assets/Gary-Mulcrone-Portfolio.png'

const Projects: React.FC = () => {
    return (
        <section className={styles.projectsContainer} id='projects'>
            <div className={styles.projectsWrapper}>
                <div className={styles.headerWrapper}>
                    <div className={styles.projectsHeader}><span className={styles.accentColor}>03.</span>Some Recent Projects <hr style={{ width: '45%' }} /></div>
                </div>
                <ProjectCard
                    imgUrl={SavvyCSVImg}
                    projectDescription='Savvy CSV is a web application designed to effortlessly create the ideal CSV file through the use of webscrapping technologies and AI.'
                    projectTitle='SavvyCSV'
                    projectTechnologies={['ReactJS', 'Firebase', 'Typescript', 'AWS Lambda', 'Redux', 'Framer Motion']}
                    alignment='right'
                    websiteUrl='https://savvycsv.com/' />
                <ProjectCard
                    imgUrl={HAHDSurveyImg}
                    projectDescription='A full-stack ReactJS application that collects human attention data through eye-tracking to train deep learning models for hazardous object detection, featuring user authentication, real-time leaderboards, and survey capabilities to gamify data collection across 100+ users.'
                    projectTitle='Human-Aligned Hazard Dectection Model'
                    projectTechnologies={['ReactJS', 'Typescript', 'Bootstrap', 'Express', 'MongoDB', 'JWT', 'WebGazer.js']}
                    alignment='left'
                    websiteUrl='https://onyxaillc.com/' />
                <ProjectCard
                    imgUrl={BusinessApp}
                    projectDescription='A personal financial management app that allows users to track and manage real-time expenses through the Plaid API.'
                    projectTitle='Financial Management App'
                    projectTechnologies={['ReactJS', 'Flask', 'Plaid API', 'SQL', 'Python', 'Typescript'
                    ]}
                    alignment='right'
                    websiteUrl='https://github.com/StuartGavidia/businessapp' />
                <ProjectCard
                    imgUrl={SortingVisualizerImg}
                    projectDescription='A ReactJS application that assists students in visualizing common sorting algorithms.'
                    projectTitle='Sorting Algorithm Visualizer'
                    projectTechnologies={['ReactJS', 'Typescript']}
                    alignment='left'
                    websiteUrl='https://github.com/jonahansmulcrone/SortingVisualizer' />
                <ProjectCard
                    imgUrl={MyPortfolio}
                    projectDescription='A ReactJS application that showcases my skills and experience as a software developer.'
                    projectTitle='Portfolio Website'
                    projectTechnologies={['ReactJS', 'Typescript', 'AWS Amplify']}
                    alignment='right'
                    websiteUrl='https://jonahmulcrone.com' />
                <ProjectCard
                    imgUrl={GaryPortfolio}
                    projectDescription="An HTML, CSS, and Javascript application that showcases my father's flower photography, with a functional contact form built on Express."
                    projectTitle='Flower Photography Portfolio'
                    projectTechnologies={['HTML', 'CSS', 'Javascript', 'Express']}
                    alignment='left'
                    websiteUrl='https://garymulcrone.com' />
            </div>
        </section>
    );
}

export default Projects