import { ProjectListType } from '@/app/types';
import React, { useState } from 'react';

const ProjectsHeader = ({
  onSortChange,
  activeSort,
}: {
  onSortChange: (sortBy: ProjectListType) => void;
  activeSort: ProjectListType;
}) => {
  const handleSortChange = (sort: ProjectListType) => {
    onSortChange(sort);
  };

  return (
    <div className="projects-header container py-4">
      <div className="row align-items-center">
        {/* Section Title */}
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <h2 className="fw-bold mb-0">Our Projects</h2>
          <p className="text-muted">
            Discover our top-rated, recent, and upcoming projects.
          </p>
        </div>

        {/* Controls */}
        <div className="col-12 col-md-6 d-flex justify-content-md-end justify-content-start gap-2">
          <button
            className={`btn btn-outline-primary ${
              activeSort === 'recent' ? 'active' : ''
            }`}
            onClick={() => handleSortChange('recent')}
          >
            Recent
          </button>
          <button
            className={`btn btn-outline-primary ${
              activeSort === 'top' ? 'active' : ''
            }`}
            onClick={() => handleSortChange('top')}
          >
            Top
          </button>
          <button
            className={`btn btn-outline-primary ${
              activeSort === 'coming-soon' ? 'active' : ''
            }`}
            onClick={() => handleSortChange('coming-soon')}
          >
            Coming Soon
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsHeader;
