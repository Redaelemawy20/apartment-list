'use client';
import styles from './property-card.module.css';
import useOnScreen from '@/components/hooks/useOnScreen';
import { useEffect } from 'react';
import { getApartment } from '@/api';
import { useFetch } from '@/components/hooks/useFetch';
import CardContent from './CardContent';
interface PropertyCardI {
  property: string;
}
const Property = ({ property }: PropertyCardI) => {
  const [ref, isvisible] = useOnScreen<HTMLElement>();

  const {
    data: propertyData,
    error,
    loading,
    fetchManually,
  } = useFetch({ fetcher: () => getApartment(property), load: false });

  useEffect(() => {
    if (isvisible) fetchManually();
  }, [isvisible]);

  return (
    <article
      className={[
        'card col-12 col-md-6 col-lg-4 shadow-sm border-0 mb-4',
        loading ? styles.skeleton : '',
        error ? styles.error : '',
      ].join(' ')}
      ref={ref}
      style={{ minHeight: '200px', borderRadius: '10px', overflow: 'hidden' }}
    >
      {propertyData ? (
        <CardContent propertyData={propertyData} />
      ) : (
        // Empty card skeleton for loading
        <div className="property-section text-decoration-none d-block">
          <div className="image bg-light" style={{ height: '200px' }}></div>
          <div className="property-content p-3">
            <div
              className="bg-light mb-2"
              style={{ height: '20px', width: '70%' }}
            ></div>
            <div
              className="bg-light mb-2"
              style={{ height: '20px', width: '50%' }}
            ></div>
            <div
              className="bg-light"
              style={{ height: '15px', width: '90%' }}
            ></div>
          </div>
        </div>
      )}
    </article>
  );
};

export default Property;
