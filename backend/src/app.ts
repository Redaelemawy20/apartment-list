import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import apartmentsRoutes from './routes/apartments.routes';
import areasRoutes from './routes/areas.routes';
import developersRoutes from './routes/developers.routes';
import projectRoutes from './routes/project.routes';
const app = express();
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);
app.use(bodyParser.json());
app.use('/api', apartmentsRoutes);
app.use('/api', areasRoutes);
app.use('/api', developersRoutes);
app.use('/api', projectRoutes);

export default app;
