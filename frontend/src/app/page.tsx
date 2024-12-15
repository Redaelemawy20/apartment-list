import Apartment from '@shared/interfaces/Apartment';
import Hero from '@/components/sections/Hero/Hero';
import Areas from '@/components/sections/Areas';
import Projects from '@/components/sections/Projects';
import Search from '@/components/sections/Filter/Filter';
let a: Apartment;
export default function AppartmentListing() {
  return (
    <div>
      <Hero />
      {/* <Banner
        title="Find Your Home"
        subtitle="With large collection made for your needs"
        url="/search?purpose=for-rent"
        urlTitle="explore renting"
        description="Explore apartments, villas, homes, and more"
        imgURL={heroBanner.src}
      /> */}
      {/* <ApartmentCollection view="most-recommended" /> */}
      {/* <Project /> */}
      {/* <Areas view="top-5" /> */}
      {/* {<Projects view="all" />} */}
      <Search />
      {/* <Compound /> */}
    </div>
  );
}
