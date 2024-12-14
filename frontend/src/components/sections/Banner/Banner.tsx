import Image from 'next/image';
import Link from 'next/link';
import styles from './banner.module.css';

interface BannerI {
  imgURL: string;
  title: string;
  subtitle: string;
  url: string;
  urlTitle: string;
  description: string;
}

const Banner = ({
  imgURL,
  title,
  subtitle,
  url,
  urlTitle,
  description,
}: BannerI) => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerWrapper}>
        <div className="position-relative w-100" style={{ height: '300px' }}>
          <Image
            src={imgURL}
            alt="flat-img"
            fill
            quality={100}
            objectFit="cover"
          />
        </div>
        {/* <div className="banner-content text-capitalize">
          <h6 className="title">{title}</h6>
          <div className="subtitle text-muted mb-2">{subtitle}</div>
          <div className="description mb-2">{description}</div>
          <Link href={url} passHref>
            <a className="btn btn-info btn-sm text text-white">{urlTitle}</a>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
