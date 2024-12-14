import express from 'express';
import {
  addApartment,
  getAllApartments,
  getApartmentById,
} from '../controllers/apartment.controller';

const router = express.Router();

// Route to get all apartments
router.get('/apartments', getAllApartments);

// Route to get single apartment by id
router.get('/apartments/:id', getApartmentById);

// Route to add a new apartment
router.post('/apartments', addApartment);

export default router;
