import { Router } from 'express';
import UsersController from '../controllers/UsersController';

const usersRoutes = Router();

usersRoutes.post('/', UsersController.create);
// usersRoutes.get('/', UsersController.findAll);
// usersRoutes.get('/:id', UsersController.findOne);
// usersRoutes.put('/:id', UsersController.update);
// usersRoutes.delete('/:id', UsersController.destroy);

export default usersRoutes;
