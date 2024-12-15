import React from 'react';
import { getProjects } from '@/api';
import styles from './collection.module.css';
import { ProjectListType } from '@/app/types';
import ProjectCard from '../cards/ProjectCard/ProjectCard';
interface ProjectsI {
  view: ProjectListType;
}
const Projects = async ({ view }: ProjectsI) => {
  let title = getTitle(view);

  try {
    const projects = await getProjects(view);
    return (
      <section className={`container mt-5 ${styles.collection}`}>
        <h2>{title}</h2>
        <div className="row gap-2">
          {projects.map((item, index) => (
            <ProjectCard project={item._id} key={item._id} />
          ))}
        </div>
      </section>
    );
  } catch (error) {
    console.log({ error });

    return <section>Error loading projects</section>;
  }
};

export default Projects;

const getTitle = (view: ProjectListType) => {
  switch (view) {
    case 'top-5':
      return 'Top 5 Projects';
    case 'comming-soon':
      return 'Comming Soon';
    default:
      return 'All Projects';
  }
};
