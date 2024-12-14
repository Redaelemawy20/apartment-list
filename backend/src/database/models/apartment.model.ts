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
  image: {
    type: String,
    required: false,
  },
});

const Apartment = mongoose.model('Apartment', apartmentSchema);

export default Apartment;
