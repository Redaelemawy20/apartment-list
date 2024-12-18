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
  image: {
    type: String,
    required: false,
  },
});

const Area = mongoose.model('Area', areaSchema);

export default Area;
