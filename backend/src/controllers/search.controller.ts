import { Request, Response } from 'express';
import Apartment from '../database/models/apartment.model';
import Project from '../database/models/project.model';
import Area from '../database/models/area.model';
import { maxHeaderSize } from 'http';
export const getFilterOptions = async (req: Request, res: Response) => {
  try {
    const projects = await Project.find({}, '_id name');
    const areas = await Area.find({}, '_id name');
    // Respond with the filter data
    res.status(200).json({
      projects,
      areas,
    });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while fetching filter options.',
      error: error.message,
    });
  }
};

const buildQuery = (params: any) => {
  const { minPrice, maxPrice, rooms, minSize, maxSize, status, area, project } =
    params;

  const query: any = {};

  // Price filter
  if (minPrice || maxPrice) {
    query.price = {};
    if (minPrice) query.price.$gte = +minPrice;
    if (maxPrice) query.price.$lte = +maxPrice;
  }

  // Rooms filter
  if (rooms) {
    query.rooms = { $gte: +rooms };
  }

  // Size filter
  if (minSize || maxSize) {
    query.size = {};
    if (minSize) query.size.$gte = +minSize;
    if (maxPrice) query.size.$lte = +maxPrice;
  }

  // Status filter
  if (status) {
    query.status = status;
  }

  // Area filter
  if (area) {
    query.area = area;
  }

  // Project filter
  if (project) {
    query.project = project;
  }
  console.log(query);

  return query;
};

const fetchApartments = async (query: any) => {
  try {
    const apartments = await Apartment.find(query)
      .select('_id') // Select only `_id`
      .exec();
    return apartments;
  } catch (error: any) {
    console.error('Database Fetch Error:', error.message);
    throw new Error('Error fetching apartments from the database');
  }
};

/**
 * Handle the request to filter apartments based on query parameters.
 */
export const filterApartments = async (req: Request, res: Response) => {
  try {
    // Build the query based on query parameters
    const query = buildQuery(req.query);

    // Fetch the filtered apartments
    const apartments = await fetchApartments(query);

    // Respond with the filtered apartments
    res.status(200).json(apartments);
  } catch (error: any) {
    // Handle errors during the filtering process
    handleError(error, res);
  }
};

/**
 * Centralized error handling
 */
const handleError = (error: any, res: Response) => {
  console.error(error);
  res.status(500).json({
    success: false,
    message: 'An error occurred while fetching apartments',
    error: error.message,
  });
};
