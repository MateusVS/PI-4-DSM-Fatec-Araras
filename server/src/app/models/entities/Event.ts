import IEvent from '@models/interfaces/IEvent';
import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from 'sequelize';
import { db } from '../../../database/db';

const sequelize = db as Sequelize;

export class Event extends Model<InferAttributes<Event>, InferCreationAttributes<Event>> implements IEvent {
  declare id: number;
  declare description: string;
  declare temperature: number;
  declare wasRead: boolean;
  declare comments: string;
  declare userId: number;
  declare createdAt: Date;
  declare updatedAt: Date;
}

Event.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'O campo descrição não pode ser vazio',
      },
    },
  },
  temperature: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'O campo temperatura não pode ser vazio',
      },
    },
  },
  wasRead: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  comments: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
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
