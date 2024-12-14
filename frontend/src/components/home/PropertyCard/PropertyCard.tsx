import Link from 'next/link';
import Image from 'next/image';
import styles from './ProperytCard.module.css';
import defaultPhoto from '@/assets/house.jpg';
import { GoVerified } from 'react-icons/go';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsFillGridFill } from 'react-icons/bs';
import PropertyDeveloper from './PropertyDeveloper/PropertyDeveloper';
interface PropertyCardI {
  property: {
    _id: string;
    coverPhoto: string;
    price: number;
    rooms: number;
    baths: number;
    title: string;
    area: string;
    status: string;
    developer: string;
  };
}
const Property = ({ property }: PropertyCardI) => {
  let { title, coverPhoto } = property;
  return (
    <div className="col-12 col-md-4">
      <Link href={`/property/${property._id}`} passHref>
        <a className="property-section text-decoration-none d-block mb-3">
          <div className="image">
            <Image
              src={coverPhoto ? coverPhoto : defaultPhoto}
              alt={property.title}
              width={400}
              height={260}
            />
          </div>
          <div className="property-content">
            <div className={styles.head}>
              <div className="d-flex">
                {property.status && (
                  <span className="icon me-2 text-success">
                    <GoVerified />
                  </span>
                )}
                <span className={styles.price}>EGP {property.price}</span>
              </div>
              <PropertyDeveloper developer={property.developer} />
            </div>
            <div className="specs">
              {property.rooms} <FaBed className="me-3" /> | {property.baths}{' '}
              <FaBath className="me-3" /> | {property.area}
              <BsFillGridFill />
            </div>
            <div className={`${styles.title} mt-3`}>
              {title.length > 50 ? `${title.substring(0, 30)}...` : title}
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Property;
