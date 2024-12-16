import Search from '@/components/sections/Filter/Filter';
import { getSearchOptions } from '@/api';
import SearchResults from '@/components/sections/SearchResult';
const results = [
  {
    id: '1',
    image: '/images/apartment1.jpg',
    title: 'Luxurious Apartment in Downtown',
    price: 1500000,
    rooms: 3,
    size: 1200,
    status: 'Available',
  },
  {
    id: '2',
    image: '',
    title: 'Spacious Villa with Garden',
    price: 5000000,
    rooms: 5,
    size: 3000,
    status: 'Sold',
  },
  {
    id: '3',
    image: '/images/apartment3.jpg',
    title: 'Cozy Apartment Near Park',
    price: 1200000,
    rooms: 2,
    size: 900,
    status: 'Rented',
  },
];

export default async function SearchPage() {
  const options = await getSearchOptions();
  return (
    <>
      <Search options={options} />;
      <SearchResults results={results} />
    </>
  );
}
