import React from 'react';
import styles from './hero.module.css';
import Image from 'next/image';
import img from '@/assets/banner/banner@xl.webp';
function Hero() {
  return (
    <section className={styles.main_Section}>
      <Image src={img} alt="image view" fill />
      <div className={styles.container}>
        <h1>Explore. The. Happy. Homes.</h1>
      </div>
    </section>
  );
}

export default Hero;
