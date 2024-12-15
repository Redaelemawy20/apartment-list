import { AreasListType, ProjectListType } from '@/app/types';
import Apartment from '@shared/interfaces/Apartment';
import { ApiResponse, IdsResponse } from '@shared/types/Api';
import AreaI from '../../../shared/interfaces/AreaI';
import ProjectI from '@shared/interfaces/ProjectI';

const baseApiUrl = process.env.NEXT_PUBLIC_API_URL as string;
const apartmentApiUrl = `${baseApiUrl}/api/apartments`;

export const getApartments = async (view: string) => {
  try {
    const response = await fetch(`${apartmentApiUrl}/${view}`);
    if (!response.ok) {
      throw new Error('Failed to fetch recommended apartments');
    }

    return (await response.json()) as IdsResponse;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getApartment = async (id: string) => {
  try {
    const response = await fetch(`${apartmentApiUrl}/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch apartment with ID: ${id}`);
    }
    return (await response.json()) as ApiResponse<Apartment>;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Areas Apis
const areasApiUrl = `${baseApiUrl}/api/areas`;
export const getAreas = async (view: AreasListType) => {
  try {
    const response = await fetch(
      `${areasApiUrl}${view !== 'all' ? `/${view}` : ''}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch top areas');
    }
    return (await response.json()) as IdsResponse;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const getArea = async (id: string) => {
  try {
    const response = await fetch(`${areasApiUrl}/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch area with ID: ${id}`);
    }
    return (await response.json()) as ApiResponse<AreaI>;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Projects Apis
const projectsApiUrl = `${baseApiUrl}/api/projects`;
export const getProjects = async (view: ProjectListType) => {
  try {
    const response = await fetch(
      `${projectsApiUrl}${view !== 'all' ? `/${view}` : ''}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch top areas');
    }
    return (await response.json()) as IdsResponse;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const getProject = async (id: string) => {
  try {
    const response = await fetch(`${projectsApiUrl}/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch project with ID: ${id}`);
    }
    return (await response.json()) as ApiResponse<ProjectI>;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
