import Image from 'next/image';
import styles from './style.module.css';
import img from '@/assets/house.jpg';

const Project = () => {
  return (
    <div className={`${styles.img_wrapper} card col-4`}>
      <Image
        src={img}
        alt="image"
        width={100}
        height={100}
        className={styles.img}
      />
      <div className={styles.info_wrapper}>
        <h5 className={styles.h5}>New cairo</h5>
        <p className="my-0">100 Compounds</p>
        <p className="my-0">90 Properties Available</p>
      </div>
    </div>
  );
};

export default Project;
