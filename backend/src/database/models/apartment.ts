import mongoose from 'mongoose';

const apartmentSchema = new mongoose.Schema({
  name: {
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
  developer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Developer',
    required: true,
  },
  area: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Area',
    required: true,
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: true,
  },
  status: {
    type: String,
    enum: ['Available', 'Sold', 'Rented'],
    default: 'Available',
  },
});

const Apartment = mongoose.model('Apartment', apartmentSchema);

export default Apartment;
