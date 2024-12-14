import { Request, Response } from 'express';
import Project from '../database/models/project.model';

// Get all projects
export const getAllProjects = async (req: Request, res: Response) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch projects', error: err });
  }
};

// Get top 5 compounds (finished projects)
export const getTopCompounds = async (req: Request, res: Response) => {
  try {
    const compounds = await Project.find({ status: 'Finished' })
      .sort({ popularityScore: -1 }) // Sort by popularity
      .limit(5); // Limit to 5
    res.status(200).json(compounds);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Failed to fetch top compounds', error: err });
  }
};

// Get project by ID
export const getProjectById = async (req: Request, res: Response) => {
  try {
    const projectId = req.params.id; // Get the project ID from URL parameters
    const project = await Project.findById(projectId); // Find the project by ID

    if (!project) {
      res.status(404).json({ message: 'Project not found' });
      return;
    }

    res.status(200).json(project);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching project', error: err });
  }
};

// Get "Coming Soon" projects
export const getComingSoonProjects = async (req: Request, res: Response) => {
  try {
    const comingSoonProjects = await Project.find({ status: 'Coming Soon' }); // Find projects with status "Coming Soon"

    if (comingSoonProjects.length === 0) {
      res.status(404).json({ message: 'No coming soon projects found' });
      return;
    }

    res.status(200).json(comingSoonProjects);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error fetching coming soon projects', error: err });
  }
};

// Add a new project
export const addProject = async (req: Request, res: Response) => {
  try {
    // Destructure data from the request body
    const {
      name,
      location,
      description,
      developer,
      area,
      image,
      start_date,
      end_date,
      status,
      popularityScore,
    } = req.body;

    // Create a new Project instance
    const newProject = new Project({
      name,
      location,
      description,
      developer,
      area,
      image,
      start_date,
      end_date,
      status,
      popularityScore,
    });

    // Save the new project to the database
    await newProject.save();

    // Return a success response
    res.status(201).json({
      message: 'Project created successfully',
      project: newProject,
    });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      message: 'Error creating project',
      error: error.message,
    });
  }
};
