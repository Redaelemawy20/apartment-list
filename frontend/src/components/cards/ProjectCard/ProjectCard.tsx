'use client';
import styles from './project.module.css';
import useOnScreen from '@/components/hooks/useOnScreen';
import { useFetch } from '@/components/hooks/useFetch';
import { getProject } from '@/api';
import { useEffect } from 'react';
import CardContent from './CardContent';
import EmptyCard from './EmptyCard';
interface ProjectCardI {
  project: string;
}
const ProjectCard = ({ project }: ProjectCardI) => {
  const [ref, isvisible] = useOnScreen<HTMLElement>({ threshold: 0.5 });
  const {
    data: projectData,
    error,
    loading,
    fetchManually,
  } = useFetch({ fetcher: () => getProject(project), load: false });
  useEffect(() => {
    if (isvisible && !projectData) fetchManually();
  }, [isvisible]);

  return (
    <article
      ref={ref}
      className={`${styles.img_wrapper} card col-4 ${
        loading ? styles.skeleton_wrapper : ''
      } ${error ? 'border-danger' : ''}`}
    >
      {projectData ? <CardContent project={projectData} /> : <EmptyCard />}
    </article>
  );
};

export default ProjectCard;
