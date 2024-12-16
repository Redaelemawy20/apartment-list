'use client';
import React, { useState } from 'react';
import { getProjects } from '@/api';
import styles from './collection.module.css';
import { ProjectListType } from '@/app/types';
import ProjectCard from '../cards/ProjectCard/ProjectCard';
import { useFetch } from '../hooks/useFetch';
import ProjectsHeader from './ProjectHeader';

const Projects = () => {
  const [activeSort, setActiveSort] = useState<ProjectListType>('recent');
  const {
    data: projectData,
    error,
    loading,
  } = useFetch({ fetcher: () => getProjects(activeSort), deps: [activeSort] });

  const handleChangeSort = (sort: ProjectListType) => {
    setActiveSort(sort);
  };

  return (
    <>
      <ProjectsHeader onSortChange={handleChangeSort} activeSort={activeSort} />
      <section className={`container mt-5 ${styles.collection}`}>
        {error && <h2>Error Loading Projects</h2>}
        {loading && <h2>Loading Projects...</h2>}
        <div className="row gap-2">
          {projectData &&
            projectData.map((item, index) => (
              <ProjectCard project={item._id} key={item._id} />
            ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
