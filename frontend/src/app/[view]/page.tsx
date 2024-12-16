import ApartmentsCollection from '@/components/sections/ApartmentCollection';
import { ApartmentListingType } from '../types';
import Hero from '@/components/sections/Hero/Hero';

interface Props {
  params: { view: string };
}
const ApartmentListing = ({ params: { view } }: Props) => {
  return (
    <>
      <Hero />
      <ApartmentsCollection view={view as ApartmentListingType} />
    </>
  );
};

export default ApartmentListing;
