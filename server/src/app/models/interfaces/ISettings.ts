export interface ISettings {
  id: number;
  city: string;
  blue_led_temperature?: number;
  green_led_temperature?: number;
  yellow_led_temperature?: number;
  red_led_temperature?: number;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}
