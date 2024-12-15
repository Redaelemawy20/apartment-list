import Image from 'next/image';
import img from '@/assets/house.jpg';
import styles from './area.module.css';
import AreaI from '@shared/interfaces/AreaI';
const CardContent = ({ area }: { area: AreaI }) => {
  const { compoundCount } = area;
  return (
    <>
      <Image
        src={img}
        alt="image"
        width={150}
        height={150}
        className={styles.img}
      />
      <div className={styles.info_wrapper}>
        <h5 className={styles.h5}>{area.name}</h5>
        <p className="my-0">
          {compoundCount ? `${compoundCount} Compounds` : 'No Compunds'}{' '}
        </p>
        {area.description && (
          <p className="text-center mt-2">{area.description}</p>
        )}
      </div>
    </>
  );
};

export default CardContent;
