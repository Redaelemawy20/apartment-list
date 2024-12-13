import express from 'express';
import bodyParser from 'body-parser';
// import apartmentRoutes from './routes/apartmentRoutes';

const app = express();

app.use(bodyParser.json()); // Parse JSON bodies
// app.use('/api', apartmentRoutes);
app.get('/', (req, res) => {
  res.send('hello world');
});
export default app;
