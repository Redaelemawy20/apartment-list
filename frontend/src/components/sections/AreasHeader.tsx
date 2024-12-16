import React from 'react';
import styles from './area-header.module.css';
import { AreasListType } from '@/app/types';

const AreaHeader = ({
  onSortChange,
}: {
  onSortChange: (sortType: AreasListType) => void;
}) => {
  return (
    <header
      className={`${styles.header} container d-flex align-items-center justify-content-between`}
    >
      <h1 className={styles.title}>Explore Areas</h1>

      <div className={styles.sortDropdown}>
        <select
          className="form-select"
          onChange={(e) => onSortChange(e.target.value as AreasListType)}
        >
          <option value="all">Recent</option>
          <option value="top-areas">Top Rated</option>
        </select>
      </div>
    </header>
  );
};

export default AreaHeader;
