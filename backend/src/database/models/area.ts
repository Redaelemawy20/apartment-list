import mongoose from 'mongoose';

const areaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  latitude: {
    type: Number,
    required: false,
  },
  longitude: {
    type: Number,
    required: false,
  },
});

const Area = mongoose.model('Area', areaSchema);

export default Area;
