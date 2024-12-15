import mongoose from 'mongoose';
import { ApartmentStatus } from '../../../../shared/interfaces/Apartment';
const apartmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  size: {
    type: Number,
    required: true, // in square feet
  },
  rooms: {
    type: Number,
    required: true,
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: true,
  },
  status: {
    type: String,
    enum: ApartmentStatus,
    default: ApartmentStatus.Available,
  },
  image: {
    type: String,
    required: false,
  },
  views: {
    required: false,
    type: Number,
  },
  recommendations: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Apartment = mongoose.model('Apartment', apartmentSchema);

export default Apartment;
