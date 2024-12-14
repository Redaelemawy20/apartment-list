import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: String,
  description: String,
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
  image: {
    type: String,
    required: false,
  },
  start_date: {
    type: Date,
    required: true,
  },
  end_date: {
    type: Date,
    required: false,
  },
  status: {
    type: String,
    enum: ['In Progress', 'Under Construction', 'Completed'],
    default: 'In Progress',
  },
  popularityScore: { type: Number, default: 0 },
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
