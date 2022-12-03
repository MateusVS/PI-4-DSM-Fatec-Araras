import * as path from 'path';
import * as fs from 'fs';

export default class ArduinoService {
  public static getArduinoTemperature(): number {
    const fileDir = path.resolve(__dirname, '../../../../common/temperature.txt');
    const temperature: string = fs.readFileSync(fileDir, 'utf8').toString();

    return +temperature;
  }
}
