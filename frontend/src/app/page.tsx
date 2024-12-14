import Banner from '@/components/sections/Banner/Banner';
import heroBanner from '@/assets/banner/banner@xl.webp';
export default function Home() {
  return (
    <div>
      <Banner
        title="Find Your Happy Home"
        subtitle="With large collection made for your needs"
        url="/search?purpose=for-rent"
        urlTitle="explore renting"
        description="Explore apartments, villas, homes, and more"
        imgURL={heroBanner.src}
      />
    </div>
  );
}
