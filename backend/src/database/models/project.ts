import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
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
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
