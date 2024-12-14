import Image from 'next/image';
import styles from './PropertyDeveloper.module.css';
interface ProperytDeveloperI {
  developer: string;
}
const PropertyDeveloper = ({ developer }: ProperytDeveloperI) => {
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

export default PropertyDeveloper;
