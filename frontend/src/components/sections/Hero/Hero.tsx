import React from 'react';
import styles from './hero.module.css';
import Link from 'next/link';
import Image from 'next/image';
import img from '@/assets/banner/banner@xl.webp';
function Hero() {
  return (
    <section className={styles.main_Section}>
      <Image src={img} alt="image view" fill />
      <div className={styles.container}>
        <h1>Agents. Tours. Loans. Homes.</h1>
        <Link href="/">Expolre More</Link>
      </div>
    </section>
  );
}

export default Hero;
