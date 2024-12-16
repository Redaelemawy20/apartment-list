'use client';
import React, { useState } from 'react';
import { getAreas } from '@/api';
import styles from './collection.module.css';
import { AreasListType } from '@/app/types';
import AreaCard from '@/components/cards/AreaCard/AreaCard';
import { useFetch } from '../hooks/useFetch';
import AreaHeader from './AreasHeader';

const Areas = () => {
  const [activeSort, setActiveSort] = useState<AreasListType>('all');
  const {
    data: areasData,
    error,
    loading,
  } = useFetch({ fetcher: () => getAreas(activeSort), deps: [activeSort] });

  const handleChangeSort = (sort: AreasListType) => {
    setActiveSort(sort);
  };

  return (
    <>
      <AreaHeader onSortChange={handleChangeSort} />
      <div className={`container mt-5 ${styles.collection}`}>
        {error && <h2>Error Loading Areas</h2>}
        {loading && <h2>Loading Areas...</h2>}
        <div className="row gap-2">
          {areasData &&
            areasData.map((item, index) => (
              <AreaCard area={item._id} key={item._id} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Areas;
