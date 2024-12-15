'use client';
import Link from 'next/link';
import { useState } from 'react';
import styles from './navbar.module.css';
import logo from '@/assets/logo.svg';
import { GoKebabHorizontal, GoHome, GoSearch } from 'react-icons/go';
import { AiOutlineKey, AiOutlineDollar } from 'react-icons/ai';
import Image from 'next/image';
const Navbar = () => {
  const [isShow, setIsShow] = useState(false);
  const showMenu = () => {
    setIsShow(!isShow);
  };
  const listData = [
    {
      name: 'home',
      icon: <GoHome />,
      link: '/',
    },
    {
      name: 'search',
      icon: <GoSearch />,
      link: '/search',
    },
    {
      name: 'buy property',
      icon: <AiOutlineDollar />,
      link: '/search?purpose=for-sale',
    },
    {
      name: 'rent property',
      icon: <AiOutlineKey />,
      link: '/search?purpose=for-rent',
    },
  ];
  return (
    <nav
      className={`${styles.myNav} p-1 border-bottom border-muted d-flex justify-content-between align-items-start`}
    >
      <div className={styles.brand}>
        <h3 className="text-capitalize">
          <Link href="/">
            <Image src={logo} width={'100'} alt="Nawy logo" />
          </Link>
        </h3>
      </div>
      <div className={`${styles.list}`}>
        <span
          className={`${styles.bars} text-muted border border-muted rounded`}
          onClick={showMenu}
        >
          <GoKebabHorizontal />
        </span>
        {isShow && (
          <ul className={`${styles.listItems} list-unstyled`}>
            {listData.map((item) => {
              return (
                <li key={item.name} className={`${styles.listLink} d-flex`}>
                  <Link href={item.link} passHref>
                    <a className={`text-decoration-none ${styles.link}`}>
                      <span className="icon me-3">{item.icon}</span>
                      <span className="name text-capitalize">{item.name}</span>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
