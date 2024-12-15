import Image from 'next/image';
import styles from './styles.module.css';
import img from '@/assets/house.jpg';

const Compound = () => {
  return (
    <div className={`${styles.wrapper_img} card col-3`}>
      <div style={{ width: '100%', height: '200px' }}>
        <Image src={img} alt="image" fill objectFit="cover" />
      </div>
      <div className={styles.property_info}>
        <h4>new cairo</h4>
        <p>103 Properties</p>
      </div>
    </div>
  );
};

export default Compound;
