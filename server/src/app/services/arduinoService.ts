import { SerialPort, ByteLengthParser } from 'serialport';

export default class ArduinoService {
  public static async getArduinoTemperature(): Promise<number> {
    const port = new SerialPort({
      path: '/dev/ttymxc2',
      baudRate: 57600,
      //parser: ByteLengthParser(1)
    });

    return 23;
  }
}
