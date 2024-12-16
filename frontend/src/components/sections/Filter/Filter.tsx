'use client';
import { FaFilter } from 'react-icons/fa';
import styles from './filter.module.css';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import FilterOptions from '@shared/interfaces/FilterOptions';

interface SearchI {
  options?: FilterOptions;
}

const Search = ({ options = {} as FilterOptions }: SearchI) => {
  const searchParams = useSearchParams();

  const initialFilterState = {
    minPrice: searchParams.get('minPrice') || '',
    maxPrice: searchParams.get('maxPrice') || '',
    minSize: searchParams.get('minSize') || '',
    maxSize: searchParams.get('maxSize') || '',
    rooms: searchParams.get('rooms') || '',
    status: searchParams.get('status') || '',
    area: searchParams.get('area') || '',
    project: searchParams.get('project') || '',
  };

  const [searchFilter, setSearchFilter] = useState(initialFilterState);
  const [showSearch, toggleSearch] = useState(false);

  useEffect(() => {
    setSearchFilter({
      minPrice: searchParams.get('minPrice') || '',
      maxPrice: searchParams.get('maxPrice') || '',
      minSize: searchParams.get('minSize') || '',
      maxSize: searchParams.get('maxSize') || '',
      rooms: searchParams.get('rooms') || '',
      status: searchParams.get('status') || '',
      area: searchParams.get('area') || '',
      project: searchParams.get('project') || '',
    });
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setSearchFilter((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const router = useRouter();
  const applyFilters = () => {
    // Serialize filters to query parameters
    const queryParams = new URLSearchParams();

    Object.entries(searchFilter).forEach(([key, value]) => {
      if (value) {
        queryParams.set(key, value); // Add non-empty filters to the query string
      }
    });

    // Push the new query params to the URL
    router.push(`?${queryParams.toString()}`);
  };
  return (
    <section className={styles.searchSection}>
      <div className="container">
        <div
          className={`${styles.searchFilter} text-capitalize text-center py-3`}
          onClick={() => toggleSearch((prevFilter) => !prevFilter)}
        >
          search property by filter
          <span className="text-muted ms-2">
            <FaFilter />
          </span>
        </div>
        {showSearch && (
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
                    name="minPrice"
                    value={searchFilter.minPrice}
                    onChange={handleChange}
                    placeholder="Min Price"
                  />
                  <input
                    type="number"
                    className="form-control"
                    id="maxPrice"
                    name="maxPrice"
                    value={searchFilter.maxPrice}
                    onChange={handleChange}
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
                    name="minSize"
                    value={searchFilter.minSize}
                    onChange={handleChange}
                    placeholder="Min Size"
                  />
                  <input
                    type="number"
                    className="form-control"
                    id="maxSize"
                    name="maxSize"
                    value={searchFilter.maxSize}
                    onChange={handleChange}
                    placeholder="Max Size"
                  />
                </div>
              </div>

              <div className="col-md-4">
                <label htmlFor="rooms" className="form-label">
                  Rooms
                </label>
                <select
                  id="rooms"
                  className="form-select"
                  name="rooms"
                  value={searchFilter.rooms}
                  onChange={handleChange}
                >
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
                <select
                  id="status"
                  className="form-select"
                  value={searchFilter.status}
                  name="status"
                  onChange={handleChange}
                >
                  <option value="">Any</option>
                  <option value="Available">Available</option>
                  <option value="Sold">Sold</option>
                  <option value="Rented">Rented</option>
                </select>
              </div>
              {options.areas && options.areas.length && (
                <div className="col-md-4">
                  <label htmlFor="area" className="form-label">
                    Area
                  </label>
                  <select
                    id="area"
                    name="area"
                    className="form-select"
                    value={searchFilter.area}
                    onChange={handleChange}
                  >
                    <option value="">Select Area</option>
                    {options.areas.map((area) => (
                      <option value={area._id} key={area._id}>
                        {area.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              {options.projects && options.projects.length && (
                <div className="col-md-4">
                  <label htmlFor="project" className="form-label">
                    Project/Compound
                  </label>
                  <select
                    id="project"
                    name="project"
                    className="form-select"
                    value={searchFilter.project}
                    onChange={handleChange}
                  >
                    <option value="">Select Project</option>
                    {options.projects.map((project) => (
                      <option value={project._id} key={project._id}>
                        {project.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="col-12 d-flex justify-content-end">
                <button className="btn btn-primary" onClick={applyFilters}>
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default Search;
