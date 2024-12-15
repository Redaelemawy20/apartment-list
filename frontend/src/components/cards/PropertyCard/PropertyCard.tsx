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
    fetchManually();
  }, [isvisible]);

  return (
    <article
      className={[
        'card col col-12 col-md-4',
        loading ? styles.skeleton : '',
        error ? styles.error : '',
      ].join(' ')}
      ref={ref}
      style={{ minHeight: '100px' }}
    >
      {propertyData ? (
        <CardContent propertyData={propertyData} />
      ) : (
        // empty card
        <div className="property-section text-decoration-none d-block mb-3">
          <div className="image"></div>
          <div className="property-content">
            <div className={styles.head}>
              <div className="d-flex"></div>
              <div className="property-project"></div>
            </div>
            <div className="specs"></div>
            <div className={`${styles.title} mt-3`}></div>
          </div>
        </div>
      )}
    </article>
  );
};

export default Property;
