import Banner from '@/components/sections/Banner';
import heroBanner from '@/assets/banner/banner@xl.webp';
import ApartmentsCollection from '@/components/sections/ApartmentCollection';
import { ApartmentListingType } from '../types';

interface Props {
  params: { view: ApartmentListingType };
}
const ApartmentListing = ({ params: { view } }: Props) => {
  return (
    <div>
      <Banner
        title="Find Your Home"
        subtitle="With large collection made for your needs"
        url="/search?purpose=for-rent"
        urlTitle="explore renting"
        description="Explore apartments, villas, homes, and more"
        imgURL={heroBanner.src}
      />
      <ApartmentsCollection view={view} />
    </div>
  );
};

export default ApartmentListing;
