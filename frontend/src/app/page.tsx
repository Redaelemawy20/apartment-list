import Hero from '@/components/sections/Hero/Hero';
import ApartmentsCollection from '@/components/sections/ApartmentCollection';
export default function AppartmentListing() {
  return (
    <>
      <Hero />
      <ApartmentsCollection view="most-recommended" />
    </>
  );
}
