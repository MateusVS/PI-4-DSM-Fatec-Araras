import ArduinoService from '@services/arduinoService';
import { Request, Response } from 'express';

class ArduinoController {
  async show(req: Request, res: Response) {
    const temperature = ArduinoService.getArduinoTemperature();
    const statusCode = temperature != null ? 200 : 201;

    return res.status(statusCode).json(temperature);
  }
}

export default new ArduinoController();
