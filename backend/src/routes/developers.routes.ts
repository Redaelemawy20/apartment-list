import express from 'express';
import {
  getAllDevelopers,
  getDeveloperById,
  addDeveloper,
} from '../controllers/developer.controller';

const router = express.Router();

// Get all developers with limit query param (default limit: 10)
router.get('/developers', getAllDevelopers);

// Get developer by ID
router.get('/developers/:id', getDeveloperById);

// Add a new developer
router.post('/developers', addDeveloper);

export default router;
