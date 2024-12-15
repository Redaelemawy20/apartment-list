import Image from 'next/image';
import styles from './property-project.module.css';
interface PropertyProjectI {
  project: string;
}
const PropertyProject = ({ project }: PropertyProjectI) => {
  // load developer Info
  let developerData = { name: 'ABC Developer', image: '....' };
  return (
    <Image
      src={developerData.name}
      alt={developerData.image}
      width={50}
      height={50}
      className={styles.logoImage}
      loading="lazy"
    />
  );
};

export default PropertyProject;
