'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import defaultPhoto from '@/assets/house.jpg';
import { useSearchParams } from 'next/navigation';
import styles from './search.module.css';
import { useFetch } from '../hooks/useFetch';
import { getSearchResult } from '@/api';
import Property from '../cards/PropertyCard/PropertyCard';

interface Apartment {
  id: string;
  image?: string;
  title: string;
  price: number;
  rooms: number;
  size: number;
  status: string;
}

interface SearchResultsProps {
  results: Apartment[];
}

const SearchResults: React.FC<SearchResultsProps> = () => {
  const searchParams = useSearchParams();
  const {
    loading,
    data: searchData,
    error,
    fetchManually,
  } = useFetch({
    fetcher: () => getSearchResult(searchParams.toString()),
    load: false,
  });
  useEffect(() => {
    fetchManually();
  }, [searchParams]);

  return (
    <div className="container my-4">
      {loading && <h2>Loading Search ...</h2>}
      {error && <h2>Error fetching data...</h2>}
      <div className="row">
        {searchData &&
          searchData.map((apartment) => (
            <Property property={apartment._id} key={apartment._id} />
          ))}
      </div>
    </div>
  );
};

// Helper function for badge color
const getStatusBadge = (status: string) => {
  switch (status) {
    case 'Available':
      return 'bg-success';
    case 'Sold':
      return 'bg-danger';
    case 'Rented':
      return 'bg-warning';
    default:
      return 'bg-secondary';
  }
};

export default SearchResults;
