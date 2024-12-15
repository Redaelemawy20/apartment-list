import React from 'react';

import { getAreas } from '@/api';
import styles from '../collection.module.css';
import { AreasListType } from '@/app/types';
import AreaCard from '@/components/cards/AreaCard/AreaCard';
interface Areas {
  view: AreasListType;
}
const Areas = async ({ view }: Areas) => {
  let title = getTitle(view);

  try {
    const areas = await getAreas(view);
    return (
      <section className={`container mt-5 ${styles.collection}`}>
        <h2>{title}</h2>
        <div className="row gap-2">
          {areas.map((item, index) => (
            <AreaCard area={item._id} key={item._id} />
          ))}
        </div>
      </section>
    );
  } catch (error) {
    console.log({ error });

    return <section>Error loading areas</section>;
  }
};

export default Areas;

const getTitle = (view: AreasListType) => {
  switch (view) {
    case 'top 5':
      return 'Top 5 Areas';
    default:
      return 'All Areas.';
  }
};
