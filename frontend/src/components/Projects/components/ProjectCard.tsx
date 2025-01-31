import { useEffect, useState } from 'react'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
    imgUrl: string
    projectTitle: string
    projectDescription: string
    projectTechnologies: string[]
    alignment: string
    websiteUrl: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ websiteUrl, imgUrl, projectTitle, projectDescription, projectTechnologies, alignment }) => {

    const [windowIsNarrow, setWindowIsNarrow] = useState(false);


    useEffect(() => {
        const handleResize = () => {
            setWindowIsNarrow(window.innerWidth <= 980);
        };

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        !windowIsNarrow ? (
            <div className={styles.projectCardContainer}>
                <div className={alignment === 'right' ? styles.imgWrapperRight : styles.imgWrapperLeft}>
                        <img src={imgUrl} />
                    <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
                    <div className={styles.imgOverlay}></div>
                    </a>
                </div>
                <div className={alignment === 'right' ? styles.contentWrapperRight : styles.contentWrapperLeft}>
                    <div className={styles.featuredProject}>
                        Featured Project
                    </div>
                    <div className={styles.projectTitle}>
                        {projectTitle}
                    </div>
                    <div className={alignment === 'right' ? styles.projectDescriptionRight : styles.projectDescriptionLeft}>
                        {projectDescription}
                    </div>
                    <div>
                        <ul className={alignment === 'right' ? styles.ulRight : styles.ulLeft}>
                            {projectTechnologies.map((technology) =>
                                <li>{technology}</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        ) : (
            <div className={styles.projectCardContainerNarrow}>
                <div className={styles.projectCardWrapperNarrow}>
                    <div className={styles.imgWrapperNarrow}>
                        <img src={imgUrl} />
                    </div>
                    <div className={styles.projectTitleNarrow}>
                        {projectTitle}
                    </div>
                    <div className={styles.projectDescriptionNarrow}>
                        {projectDescription}
                    </div>
                </div>
            </div>

        )
    );
}

export default ProjectCard