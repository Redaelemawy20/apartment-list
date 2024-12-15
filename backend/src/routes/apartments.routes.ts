import express from 'express';
import {
  addApartment,
  getAllApartments,
  getApartmentById,
  getMostRecentApartments,
  getMostRecommendedApartments,
  getMostViewedApartments,
} from '../controllers/apartment.controller';

const router = express.Router();

// Route to get all apartments
router.get('/apartments', getAllApartments);

// Route to get most recent apartments
router.get('/apartments/most-recent', getMostRecentApartments);

// Route to get most recommended apartments
router.get('/apartments/most-recommended', getMostRecommendedApartments);

// Route to get most viewed apartments
router.get('/apartments/most-viewed', getMostViewedApartments);

// Route to get single apartment by id
router.get('/apartments/:id', getApartmentById);

// Route to add a new apartment
router.post('/apartments', addApartment);

export default router;
