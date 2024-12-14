import mongoose from 'mongoose';

const developerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contact_info: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: false,
  },
  website: {
    type: String,
    required: false,
  },
  logo: {
    type: String,
    required: false,
  },
});

const Developer = mongoose.model('Developer', developerSchema);

export default Developer;
