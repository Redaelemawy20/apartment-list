import Banner from '@/components/sections/Banner';
import heroBanner from '@/assets/banner/banner@xl.webp';
import Apartment from '@shared/interfaces/Apartment';
import ApartmentCollection from '@/components/sections/ApartmentCollection';
import Project from '@/components/cards/ProjectCard/Project';
import Compound from '@/components/cards/Compound/Compund';
import Hero from '@/components/sections/Hero/Hero';
import Areas from '@/components/sections/Areas/Areas';
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
      <Areas view="top 5" />
      {/* <Compound /> */}
    </div>
  );
}
