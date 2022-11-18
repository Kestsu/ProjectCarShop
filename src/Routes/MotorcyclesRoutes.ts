import { Router } from 'express';
import MotorcyclesController from '../Controllers/MotorcyclesControllers';

const routes = Router();

routes.post('/motorcycles', (req, res, next) => new MotorcyclesController(req, res, next).create());

export default routes;
