import React from 'react';
import Property from '../cards/PropertyCard/PropertyCard';
import { getApartments } from '@/api';
import styles from './collection.module.css';
import { ApartmentListingType } from '@/app/types';
interface ApartmentsCollectionI {
  view: ApartmentListingType;
}
const ApartmentsCollection = async ({ view }: ApartmentsCollectionI) => {
  let title = getTitle(view);

  try {
    const apartments = await getApartments(view);
    return (
      <section className={'${styles.collection} container my-4 '}>
        <h2>{title}</h2>
        <div className="row">
          {apartments.map((item, index) => (
            <Property property={item._id} key={item._id} />
          ))}
        </div>
      </section>
    );
  } catch (error) {
    console.log({ error });

    return <section>Error loading apartments</section>;
  }
};

export default ApartmentsCollection;

const getTitle = (view: string) => {
  switch (view) {
    case 'most-recent':
      return 'Most Recent Apartments.';
    case 'most-recommended':
      return 'Most Recommended Apartments.';
    default:
      return 'Most Viewed Apartments.';
  }
};
