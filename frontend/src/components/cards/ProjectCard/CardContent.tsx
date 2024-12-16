import Image from 'next/image';
import img from '@/assets/house.jpg';
import styles from './project.module.css';
import ProjectI from '@shared/interfaces/ProjectI';
const CardContent = ({ project }: { project: ProjectI }) => {
  return (
    <div className={`${styles.card} card`}>
      <div className={styles.imgWrapper}>
        <Image
          src={img} // Use a default image if not available
          alt={project.name}
          fill
          objectFit="cover"
          className={styles.cardImage}
        />
      </div>
      <div className={styles.cardBody}>
        <h4 className={styles.projectTitle}>{project.name}</h4>

        <p className={styles.propertyCount}>
          {project.propertyCount
            ? `${project.propertyCount} Properties`
            : 'No avalible properties'}
        </p>
        <button className={styles.viewButton}>View Project</button>
      </div>
    </div>
  );
};

export default CardContent;
