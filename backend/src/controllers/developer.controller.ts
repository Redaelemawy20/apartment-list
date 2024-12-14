import { Request, Response } from 'express';
import Developer from '../database/models/developer.model';

// Get all developers with a limit
export const getAllDevelopers = async (req: Request, res: Response) => {
  const limit = parseInt(req.query.limit as string) || 10; // default limit to 10
  try {
    const developers = await Developer.find().limit(limit);
    res.status(200).json(developers);
  } catch (error: any) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'Error fetching developers', error: error.message });
  }
};

// Get developer by ID
export const getDeveloperById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const developer = await Developer.findById(id);
    if (!developer) {
      res.status(404).json({ message: 'Developer not found' });
      return;
    }
    res.status(200).json(developer);
  } catch (error: any) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'Error fetching developer', error: error.message });
  }
};

// Add a new developer
export const addDeveloper = async (req: Request, res: Response) => {
  const { name, contact_info, address, website, logo } = req.body;
  try {
    const newDeveloper = new Developer({
      name,
      contact_info,
      address,
      website,
      logo,
    });

    await newDeveloper.save();
    res.status(201).json({
      message: 'Developer created successfully',
      developer: newDeveloper,
    });
  } catch (error: any) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'Error creating developer', error: error.message });
  }
};
