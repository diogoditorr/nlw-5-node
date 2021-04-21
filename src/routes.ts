import { Router } from 'express';
import { SettingsControler } from './controllers/SettingsController';

const routes = Router();

const settingsController = new SettingsControler();

routes.post("/settings", settingsController.create);

export { routes }; 