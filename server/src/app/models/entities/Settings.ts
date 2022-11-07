import { ISettings } from '@models/interfaces/ISettings';
import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from 'sequelize';
import { db } from '../../../database/db';
import { User } from './User';

const sequelize = db as Sequelize;

export class Settings extends Model<InferAttributes<Settings>, InferCreationAttributes<Settings>> implements ISettings {
  declare id: number;
  declare city: string;
  declare blue_led_temperature: number;
  declare green_led_temperature: number;
  declare yellow_led_temperature: number;
  declare red_led_temperature: number;
  declare userId: number;
  declare createdAt: Date;
  declare updatedAt: Date;
}

Settings.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'O campo cidade não pode ser vazio',
      },
    },
  },
  blue_led_temperature: {
    type: DataTypes.NUMBER,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'O campo temperatura do led azul não pode ser vazio',
      },
    },
  },
  green_led_temperature: {
    type: DataTypes.NUMBER,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'O campo temperatura do led verde não pode ser vazio',
      },
    },
  },
  red_led_temperature: {
    type: DataTypes.NUMBER,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'O campo temperatura do led vermelho não pode ser vazio',
      },
    },
  },
  yellow_led_temperature: {
    type: DataTypes.NUMBER,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'O campo temperatura do led amarelo não pode ser vazio',
      },
    },
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'O usuário não pode ser vazio',
      },
    },
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, { sequelize });

User.hasOne(Settings, {
  foreignKey: 'userId',
  as: 'settings'
});

Settings.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user'
});
