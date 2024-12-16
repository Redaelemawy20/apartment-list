import Image from 'next/image';
import styles from './details.module.css';
import { GoVerified } from 'react-icons/go';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsFillGridFill } from 'react-icons/bs';
import Apartment from '@shared/interfaces/Apartment';
import image from '@/assets/house.jpg';
const ApartmentDetails = ({ apartment }: { apartment: any }) => {
  const {
    title,
    price,
    size,
    rooms,
    status,
    project,
    area,
    recommendations,
    views,
    description,
  } = apartment;

  return (
    <div className="container my-5">
      {/* Header Section */}
      <header className={`${styles.header} mb-4`}>
        <h1 className={styles.title}>{title}</h1>
        <p className="text-muted mb-2">{area.name}</p>
        {status === 'Available' && (
          <span className="badge bg-success px-3 py-2">Available</span>
        )}
      </header>

      {/* Image Gallery */}
      <section className={`${styles.imageGallery} mb-5`}>
        <Image
          src={image || '/default-apartment.jpg'}
          alt={title}
          width={900}
          height={500}
          className={`${styles.mainImage} rounded`}
          objectFit="cover"
        />
      </section>

      {/* Apartment Specifications */}
      <section className={`${styles.specs} mb-5`}>
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <div className={`${styles.specCard} text-center`}>
              <h6>Price</h6>
              <p className="fs-4 text-primary">EGP {price.toLocaleString()}</p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className={`${styles.specCard} text-center`}>
              <h6>Size</h6>
              <p className="fs-4">
                {size} sq.ft. <BsFillGridFill className="ms-2" />
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className={`${styles.specCard} text-center`}>
              <h6>Rooms</h6>
              <p className="fs-4">
                {rooms} <FaBed className="ms-2" />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project and Area Details */}
      <section className={`${styles.details} mb-5`}>
        <h4>Project & Area Details</h4>
        <ul className="list-unstyled">
          <li>
            <strong>Project:</strong> {project.name}
          </li>
          <li>
            <strong>Area:</strong> {area.name}
          </li>
          <li>
            <strong>Views:</strong> {views}
          </li>
          <li>
            <strong>Recommendations:</strong> {recommendations}
          </li>
        </ul>
      </section>

      {/* Apartment Description */}
      {description && (
        <section className={`${styles.description} mb-5`}>
          <h4>Description</h4>
          <p>{description}</p>
        </section>
      )}

      {/* Call to Action */}
      <div className={`${styles.cta} text-center mt-5`}>
        <button className="btn btn-primary px-5 py-3">Contact Agent</button>
      </div>
    </div>
  );
};

export default ApartmentDetails;
