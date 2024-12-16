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
  const [ref, isvisible] = useOnScreen<HTMLElement>();
  const {
    data: areaData,
    error,
    loading,
    fetchManually,
  } = useFetch({ fetcher: () => getArea(area), load: false });
  useEffect(() => {
    if (isvisible) fetchManually();
  }, [isvisible]);

  return (
    <article
      ref={ref}
      className={`${styles.card} col-12 col-md-6 col-lg-4 ${
        loading ? styles.skeleton : ''
      } ${error ? styles.error : ''}`}
    >
      {areaData ? <CardContent area={areaData} /> : <EmptyCard />}
    </article>
  );
};

export default AreaCard;
