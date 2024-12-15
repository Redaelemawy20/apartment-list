import Image from 'next/image';
import img from '@/assets/house.jpg';
import styles from './project.module.css';
import ProjectI from '@shared/interfaces/ProjectI';
const CardContent = ({ project }: { project: ProjectI }) => {
  // const { compoundCount } = area;
  console.log(project);

  return (
    <>
      <div style={{ width: '100%', height: '200px' }}>
        <Image src={img} alt="image" fill objectFit="cover" />
      </div>
      <div className={styles.property_info}>
        <h4>new cairo</h4>
        <p>103 Properties</p>
      </div>
    </>
  );
};

export default CardContent;
