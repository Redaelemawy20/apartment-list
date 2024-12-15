'use client';
import { FaFilter } from 'react-icons/fa';
import styles from './filter.module.css';
import { useState } from 'react';
const Search = () => {
  const [searchFilter, setSearchFilter] = useState(false);
  return (
    <section className={styles.searchSection}>
      <div className="container">
        <div
          className={`${styles.searchFilter} text-capitalize text-center py-3`}
          onClick={() => setSearchFilter((prevFilter) => !prevFilter)}
        >
          search property by filter
          <span className="text-muted ms-2">
            <FaFilter />
          </span>
        </div>
        {searchFilter && (
          //   <div className={`${styles.searchFilterSec} py-3`}>
          //     <select
          //       className="form-select"
          //       style={{
          //         flexBasis: '20%',
          //         marginRight: '5px',
          //         marginBottom: '10px',
          //       }}
          //     >
          //       <option value={'valie'}>option</option>
          //       <option value={'valie'}>option</option>
          //       <option value={'valie'}>option</option>
          //     </select>
          //     <select
          //       className="form-select"
          //       style={{
          //         flexBasis: '20%',
          //         marginRight: '5px',
          //         marginBottom: '10px',
          //       }}
          //     >
          //       <option value={'valie'}>option</option>
          //       <option value={'valie'}>option</option>
          //       <option value={'valie'}>option</option>
          //     </select>
          //     <select
          //       className="form-select"
          //       style={{
          //         flexBasis: '20%',
          //         marginRight: '5px',
          //         marginBottom: '10px',
          //       }}
          //     >
          //       <option value={'valie'}>option</option>
          //       <option value={'valie'}>option</option>
          //       <option value={'valie'}>option</option>
          //     </select>
          //     <select
          //       className="form-select"
          //       style={{
          //         flexBasis: '20%',
          //         marginRight: '5px',
          //         marginBottom: '10px',
          //       }}
          //     >
          //       <option value={'valie'}>option</option>
          //       <option value={'valie'}>option</option>
          //       <option value={'valie'}>option</option>
          //     </select>
          //   </div>
          <div className="container my-4">
            <div className="row g-3">
              <div className="col-md-4">
                <label htmlFor="priceRange" className="form-label">
                  Price Range
                </label>
                <div className="d-flex">
                  <input
                    type="number"
                    className="form-control me-2"
                    id="minPrice"
                    placeholder="Min Price"
                  />
                  <input
                    type="number"
                    className="form-control"
                    id="maxPrice"
                    placeholder="Max Price"
                  />
                </div>
              </div>

              <div className="col-md-4">
                <label htmlFor="sizeRange" className="form-label">
                  Size Range (sq ft)
                </label>
                <div className="d-flex">
                  <input
                    type="number"
                    className="form-control me-2"
                    id="minSize"
                    placeholder="Min Size"
                  />
                  <input
                    type="number"
                    className="form-control"
                    id="maxSize"
                    placeholder="Max Size"
                  />
                </div>
              </div>

              <div className="col-md-4">
                <label htmlFor="rooms" className="form-label">
                  Rooms
                </label>
                <select id="rooms" className="form-select">
                  <option value="">Any</option>
                  <option value="1">1 Room</option>
                  <option value="2">2 Rooms</option>
                  <option value="3">3+ Rooms</option>
                </select>
              </div>

              <div className="col-md-4">
                <label htmlFor="status" className="form-label">
                  Status
                </label>
                <select id="status" className="form-select">
                  <option value="">Any</option>
                  <option value="Available">Available</option>
                  <option value="Sold">Sold</option>
                  <option value="Rented">Rented</option>
                </select>
              </div>

              <div className="col-md-4">
                <label htmlFor="area" className="form-label">
                  Area
                </label>
                <select id="area" className="form-select">
                  <option value="">Select Area</option>
                  <option value="1">Downtown</option>
                  <option value="2">Uptown</option>
                </select>
              </div>

              <div className="col-md-4">
                <label htmlFor="project" className="form-label">
                  Project/Compound
                </label>
                <select id="project" className="form-select">
                  <option value="">Select Project</option>
                  <option value="1">Project A</option>
                  <option value="2">Compound B</option>
                </select>
              </div>

              <div className="col-12 d-flex justify-content-end">
                <button className="btn btn-primary">Apply Filters</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default Search;
