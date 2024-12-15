import { Request, Response } from 'express';
import Apartment from '../database/models/apartment.model';

// Get a single apartment by ID
export const getApartmentById = async (req: Request, res: Response) => {
  try {
    const apartmentId = req.params.id; // Get the apartment ID from URL params
    const apartment = await Apartment.findById(apartmentId);

    if (!apartment) {
      res.status(404).json({ message: 'Apartment not found' });
      return;
    }

    res.status(200).json(apartment);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching apartment', error: err });
  }
};

// Get all apartments with an optional limit
export const getAllApartments = async (req: Request, res: Response) => {
  try {
    const limit = parseInt(req.query.limit as string) || 10; // Default limit to 10 if not specified

    const apartments = await Apartment.find().limit(limit);

    res.status(200).json(apartments);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching apartments', error: err });
  }
};
export const getMostRecentApartments = async (req: Request, res: Response) => {
  try {
    const apartments = await Apartment.find()
      .sort({ createdAt: -1 })
      .limit(10)
      .select('_id');
    res.status(200).json(apartments);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error fetching most recent apartments', error });
  }
};

export const getMostRecommendedApartments = async (
  req: Request,
  res: Response
) => {
  try {
    const apartments = await Apartment.find()
      .sort({ recommendations: -1 })
      .limit(10);
    res.status(200).json(apartments);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error fetching most recommended apartments', error });
  }
};

export const getMostViewedApartments = async (req: Request, res: Response) => {
  try {
    const apartments = await Apartment.find().sort({ views: -1 }).limit(10);
    res.status(200).json(apartments);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error fetching most viewed apartments', error });
  }
};
// Add a new apartment
export const addApartment = async (req: Request, res: Response) => {
  try {
    const { name, price, size, rooms, project, status, image } = req.body;

    // Validate input
    if (!name || !price || !size || !rooms || !project) {
      res.status(400).json({ message: 'All required fields must be provided' });
      return;
    }

    const newApartment = new Apartment({
      name,
      price,
      size,
      rooms,
      project,
      status: status || 'Available', // Default to 'Available' if not provided
      image,
    });

    // Save the apartment to the database
    await newApartment.save();

    res.status(201).json({
      message: 'Apartment added successfully',
      apartment: newApartment,
    });
  } catch (err) {
    res.status(500).json({ message: 'Error adding apartment', error: err });
  }
};
