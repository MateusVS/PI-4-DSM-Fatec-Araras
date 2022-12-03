import 'dotenv/config';
import OpenWeatherService from '../src/app/services/openWeatherService';

describe('Unit testing for OpenWeatherService', (): void => {
  it('Test getWeatherForecast must not return a empty object on a valid request to an city', async (): Promise<void> => {
    const data = await OpenWeatherService.getWeatherForecast('araras');

    expect(data).not.toStrictEqual({});
  });

  it('Test getWeatherForecast must not return a empty object on a valid request to other city', async (): Promise<void> => {
    const data = await OpenWeatherService.getWeatherForecast('leme');

    expect(data).not.toStrictEqual({});
  });
})
