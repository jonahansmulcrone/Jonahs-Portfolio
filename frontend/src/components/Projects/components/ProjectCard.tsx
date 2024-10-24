import { useEffect, useState } from 'react'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
    imgUrl: string
    projectTitle: string
    projectDescription: string
    projectTechnologies: string[]
    alignment: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imgUrl, projectTitle, projectDescription, projectTechnologies, alignment }) => {

    const [windowIsNarrow, setWindowIsNarrow] = useState(window.innerWidth >= 980);


    useEffect(() => {
        const handleResize = () => {
            setWindowIsNarrow(window.innerWidth <= 980);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    })

    return (
        !windowIsNarrow ? (
            <div className={styles.projectCardContainer}>
                <div className={alignment === 'right' ? styles.imgWrapperRight : styles.imgWrapperLeft}>
                    <img src={imgUrl} />
                    <div className={styles.imgOverlay}></div>
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
                </div>

            </div>

        )
    );
}

export default ProjectCard