import ShowEventUseCase from '@useCases/eventsUseCases/ShowEventUseCase';
import CreateSettingsUseCase from '@useCases/settingsUseCases./CreateSettingsUseCase';
import DestroySettingsUseCase from '@useCases/settingsUseCases./DestroySettingsUseCase';
import UpdateSettingsUseCase from '@useCases/settingsUseCases./UpdateSettingsUseCase';
import { Request, Response } from 'express';
import { ISettings } from '@models/interfaces/ISettings';

class SettingsController {
  async show (req: Request, res: Response) {
    const user_id = Number(req.params.user_id);

    const showSettingsUseCase = new ShowEventUseCase();

    const settings = showSettingsUseCase.execute(user_id);

    return res.status(200).json(settings);
  }

  async create(req: Request, res: Response) {
    const createSettingsUseCase = new CreateSettingsUseCase();

    const settings = await createSettingsUseCase.execute(req.body);

    return res.status(200).json(settings);
  }

  async update(req: Request, res: Response) {
    const id = Number(req.params.id);

    const {
      city,
      blue_led_temperature,
      green_led_temperature,
      yellow_led_temperature,
      red_led_temperature,
      userId,
    } = req.body;

    const updateSettingsUseCase = new UpdateSettingsUseCase();

    await updateSettingsUseCase.execute({
      id,
      city,
      blue_led_temperature,
      green_led_temperature,
      yellow_led_temperature,
      red_led_temperature,
      userId,
    } as ISettings);

    return res.status(204).send();
  }

  async destroy (req: Request, res: Response) {
    const id = Number(req.params.id);

    const destroySettingsUseCase = new DestroySettingsUseCase();

    await destroySettingsUseCase.execute(Number(id));

    return res.status(204).send();
  }
}

export default new SettingsController();
