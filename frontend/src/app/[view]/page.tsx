import Banner from '@/components/sections/Banner';
import heroBanner from '@/assets/banner/banner@xl.webp';
import ApartmentsCollection from '@/components/sections/ApartmentCollection';
import { ApartmentListingType } from '../types';
import Hero from '@/components/sections/Hero/Hero';

interface Props {
  params: { view: ApartmentListingType };
}
const ApartmentListing = ({ params: { view } }: Props) => {
  return (
    <>
      <Hero />
      <ApartmentsCollection view={view} />
    </>
  );
};

export default ApartmentListing;
