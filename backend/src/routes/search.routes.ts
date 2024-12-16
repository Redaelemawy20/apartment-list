import {
  filterApartments,
  getFilterOptions,
} from '../controllers/search.controller';
import express from 'express';

const router = express.Router();

router.get('/search/options', getFilterOptions);

router.get('/search', filterApartments);

export default router;
