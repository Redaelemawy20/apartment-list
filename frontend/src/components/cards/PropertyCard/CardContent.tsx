import Apartment from '@shared/interfaces/Apartment';
import Image from 'next/image';
import defaultPhoto from '@/assets/house.jpg';
import { GoVerified } from 'react-icons/go';
import { FaBed } from 'react-icons/fa';
import { BsFillGridFill } from 'react-icons/bs';
import Link from 'next/link';

const CardContent = ({ propertyData }: { propertyData: Apartment }) => {
  const { image, name, price, rooms, size, status, _id } = propertyData;

  return (
    <Link href={`/apartments/${_id}`} className="text-decoration-none">
      <div
        className="card h-100 position-relative"
        style={{
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          borderRadius: '10px',
          overflow: 'hidden',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.transform = 'scale(1.03)';
          (e.currentTarget as HTMLElement).style.boxShadow =
            '0px 4px 20px rgba(0, 0, 0, 0.15)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
          (e.currentTarget as HTMLElement).style.boxShadow = 'none';
        }}
      >
        {/* Image Section */}
        <div className="position-relative" style={{ height: '200px' }}>
          <Image
            src={defaultPhoto || '/default-photo.jpg'}
            alt={name || 'property photo'}
            fill
            className="card-img-top object-fit-cover"
            style={{
              borderTopLeftRadius: '10px',
              borderTopRightRadius: '10px',
            }}
          />
          {status && (
            <span
              className={`badge position-absolute top-0 start-0 m-3 ${
                status === 'Available' ? 'bg-success' : 'bg-secondary'
              }`}
              style={{ fontSize: '0.85rem', padding: '0.5rem 0.75rem' }}
            >
              {status}
            </span>
          )}
        </div>

        {/* Content Section */}
        <div className="card-body d-flex flex-column justify-content-between">
          {/* Price and Verified */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5
              className="card-title mb-0 text-truncate"
              style={{ maxWidth: '75%' }}
            >
              {name.length > 15 ? `${name.substring(0, 15)}...` : name}
            </h5>
            <h6 className="text-primary fw-bold">
              {price ? `EGP ${price.toLocaleString()}` : 'N/A'}
            </h6>
          </div>

          {/* Specifications */}
          <div className="d-flex justify-content-between text-muted small mb-3">
            <span>
              <FaBed className="me-1" /> {rooms} Rooms
            </span>
            <span>
              <BsFillGridFill className="me-1" /> {size} Sq. Ft.
            </span>
          </div>
          <div className="text-muted small">
            <GoVerified className="me-1 text-success" />
            {propertyData.project && (
              <span>In {propertyData.project.name}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardContent;
