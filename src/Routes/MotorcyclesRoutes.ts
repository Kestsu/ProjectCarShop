import { Router } from 'express';
import MotorcyclesController from '../Controllers/MotorcyclesControllers';

const routes = Router();

routes.post('/motorcycles', (req, res, next) => new MotorcyclesController(req, res, next).create());

routes.get('/motorcycles', (req, res, next) => new MotorcyclesController(req, res, next).getAll());

routes.get('/motorcycles/:id', (req, res, next) => 
  new MotorcyclesController(req, res, next).getById());

export default routes;
