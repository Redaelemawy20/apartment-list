import Apartment from '@shared/interfaces/Apartment';
import Image from 'next/image';
import Link from 'next/link';
import defaultPhoto from '@/assets/house.jpg';
import styles from './property-card.module.css';
import { GoVerified } from 'react-icons/go';
import { FaBed } from 'react-icons/fa';
import { BsFillGridFill } from 'react-icons/bs';
import PropertyProject from './PropertyProject';
const CardContent = ({ propertyData }: { propertyData: Apartment }) => {
  let { image, title } = propertyData;
  return (
    <div>
      <div className="property-section text-decoration-none d-block mb-3">
        <div className="image" style={{ width: '400px', height: '50px' }}>
          <Image src={defaultPhoto} alt={'title'} fill />
        </div>
        <div className="property-content">
          <div className={styles.head}>
            <div className="d-flex">
              {propertyData.status && (
                <span className="icon me-2 text-success">
                  <GoVerified />
                </span>
              )}
              <span className={styles.price}>EGP {propertyData.price}</span>
            </div>
            {/* <PropertyProject project={propertyData.project} /> */}
          </div>
          <div className="specs">
            {propertyData.rooms} <FaBed className="me-3" />
            {propertyData.size}
            <BsFillGridFill />
          </div>
          <div className={`${styles.title} mt-3`}>
            {title && title.length > 50
              ? `${title.substring(0, 30)}...`
              : title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
