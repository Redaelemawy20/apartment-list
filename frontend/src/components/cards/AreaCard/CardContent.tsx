import Image from 'next/image';
import img from '@/assets/house.jpg';
import styles from './area.module.css';
import AreaI from '@shared/interfaces/AreaI';
const CardContent = ({ area }: { area: AreaI }) => {
  const { compoundCount, name, description } = area;

  return (
    <div className={styles.cardContent}>
      {/* Image Section */}
      <div className={styles.imgWrapper}>
        <Image
          src={img}
          alt={`${name} Image`}
          width={300}
          height={200}
          className={`${styles.img} rounded`}
        />
      </div>

      {/* Text Info Section */}
      <div className={styles.infoWrapper}>
        <h5 className={`${styles.title} mt-2`}>{name}</h5>
        <p className={`${styles.compoundInfo} text-muted mb-1`}>
          {compoundCount ? `${compoundCount} Compounds` : 'No Compounds'}
        </p>
        {description && (
          <p className={`${styles.description} mt-2`}>{description}</p>
        )}
      </div>
    </div>
  );
};

export default CardContent;
