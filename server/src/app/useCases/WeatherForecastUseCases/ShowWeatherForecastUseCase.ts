import IWeatherForecast from '@models/interfaces/IWeatherForecast';
import OpenWeatherService, { IApiResult } from '@services/openWeatherService';
import AppError from 'src/utils/errors/AppError';

class ShowWeatherForecastUseCase {
  public async execute(): Promise<IWeatherForecast | Array<null>> {
    const apiData = await OpenWeatherService.getWeatherForecast('dawddAAadD');

    if (apiData instanceof Array<null>) throw new AppError('Não foi possível localizar as informações de temperatura para a localização atual');

    return this.formatApiData(apiData);
  }

  private formatApiData(apiData: IApiResult): IWeatherForecast {
    const { weather, main, wind } = apiData;

    return {
      weather_description: weather[0].description,
      weather_icon: weather[0].icon,
      temp: main.temp,
      temp_min: main.temp_min,
      temp_max: main.temp_max,
      humidity: main.humidity,
      wind_speed: wind.speed,
    }
  }
}

export default ShowWeatherForecastUseCase;
