import express from 'express';
import CarRoutes from './Routes/CarsRoutes';
import MotorcyclesRoutes from './Routes/MotorcyclesRoutes';

const app = express();
app.use(express.json());
app.use(CarRoutes); 
app.use(MotorcyclesRoutes);
export default app;
