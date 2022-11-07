import { Router } from 'express';
import authMiddleware from '@middlewares/auth';
import SettingsController from '@controllers/SettingsController';

const settingsRoutes = Router();

settingsRoutes.post('/', authMiddleware, SettingsController.create);
settingsRoutes.get('/:id', authMiddleware, SettingsController.show);
settingsRoutes.put('/:id', authMiddleware, SettingsController.update);
settingsRoutes.delete('/:id', authMiddleware, SettingsController.destroy);

export default settingsRoutes;
