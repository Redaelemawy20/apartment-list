import { Request, Response } from 'express';
import Project from '../database/models/project.model';
import Area from '../database/models/area.model';

// Get top 5 areas based on the number of finished compounds (projects)
export const getTopAreas = async (req: Request, res: Response) => {
  try {
    const topAreas = await Project.aggregate([
      { $match: { status: 'Finished' } }, // Only finished compounds
      { $group: { _id: '$location', compoundCount: { $sum: 1 } } }, // Group by location
      { $sort: { compoundCount: -1 } }, // Sort by number of compounds
      { $limit: 5 }, // Limit to top 5
    ]);

    res.status(200).json(topAreas);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch top areas', error: err });
  }
};
// Get all areas with an optional limit
export const getAllAreas = async (req: Request, res: Response) => {
  try {
    const limit = parseInt(req.query.limit as string) || 10; // Default limit to 10 if not specified

    const areas = await Area.find().limit(limit);

    res.status(200).json(areas);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching areas', error: err });
  }
};
// Get a specific area by its ID
export const getAreaById = async (req: Request, res: Response) => {
  try {
    const areaId = req.params.id; // Get the area ID from the URL parameters
    const area = await Area.findById(areaId); // Find the area by ID

    if (!area) {
      res.status(404).json({ message: 'Area not found' });
      return;
    }

    // Optionally, you can also get the number of finished compounds in this area
    const compoundCount = await Project.countDocuments({
      location: area.name,
      status: 'Finished',
    });

    res.status(200).json({
      id: area._id,
      name: area.name,
      description: area.description || 'No description available',
      compoundCount: compoundCount,
    });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching area', error: err });
  }
};

// Add a new area
export const addArea = async (req: Request, res: Response) => {
  try {
    // Destructure data from the request body
    const { name, description, image } = req.body;

    // Create a new Area instance
    const newArea = new Area({
      name,
      description,
      image,
    });

    // Save the new area to the database
    await newArea.save();

    // Return a success response
    res.status(201).json({
      message: 'Area created successfully',
      area: newArea,
    });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      message: 'Error creating area',
      error: error.message,
    });
  }
};
