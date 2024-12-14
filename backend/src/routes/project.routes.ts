import express from 'express';
import {
  addProject,
  getAllProjects,
  getComingSoonProjects,
  getProjectById,
  getTopCompounds,
} from '../controllers/project.controller';

const router = express.Router();

router.get('/projects', getAllProjects); // Get all projects
router.get('/projects/top-compounds', getTopCompounds); // Get top 5 compounds

// Route to get all "Coming Soon" projects
router.get('/projects/coming-soon', getComingSoonProjects);

// Route to get a specific project by ID
router.get('/projects/:id', getProjectById);

// Route to add an new project
router.post('/projects', addProject);

export default router;
