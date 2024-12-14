import express from 'express';
import {
  addArea,
  getAllAreas,
  getAreaById,
  getTopAreas,
} from '../controllers/area.controller';

const router = express.Router();

// Route to get top 5 areas based on number of finished projects
router.get('/areas/top-areas', getTopAreas);

// Route to get all areas
router.get('/areas', getAllAreas);

// Route to get a specific area by its ID
router.get('/areas/:id', getAreaById);

// Route to add a new area
router.post('/areas', addArea);

export default router;
