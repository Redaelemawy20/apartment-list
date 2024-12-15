'use client';
import styles from './area.module.css';
import useOnScreen from '@/components/hooks/useOnScreen';
import { useFetch } from '@/components/hooks/useFetch';
import { getArea } from '@/api';
import { useEffect } from 'react';
import CardContent from './CardContent';
import EmptyCard from './EmptyCard';
interface AreaCardI {
  area: string;
}
const AreaCard = ({ area }: AreaCardI) => {
  const [ref, isvisible] = useOnScreen<HTMLElement>({ threshold: 0.5 });
  const {
    data: areaData,
    error,
    loading,
    fetchManually,
  } = useFetch({ fetcher: () => getArea(area), load: false });
  useEffect(() => {
    if (isvisible && !areaData) fetchManually();
  }, [isvisible]);
  console.log({ error });

  return (
    <article
      ref={ref}
      className={`${styles.img_wrapper} card col-4 ${
        loading ? styles.skeleton_wrapper : ''
      } ${error ? 'border-danger' : ''}`}
    >
      {areaData ? <CardContent area={areaData} /> : <EmptyCard />}
    </article>
  );
};

export default AreaCard;
