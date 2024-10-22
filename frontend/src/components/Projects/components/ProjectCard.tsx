import styles from './ProjectCard.module.css'

interface ProjectCardProps {
    imgUrl: string
    projectTitle: string
    projectDescription: string
    projectTechnologies: string[]
    alignment: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imgUrl, projectTitle, projectDescription, projectTechnologies, alignment }) => {
    return (
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
    );
}

export default ProjectCard