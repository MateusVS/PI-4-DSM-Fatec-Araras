import { DataTypes } from 'sequelize';
import bcrypt from 'bcryptjs';
import { NextFunction } from 'express';
import { db } from '../../database/db';

export const User = db.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      name: 'E-mail já utilizado',
      msg: 'Este endereço de e-mail já esta sendo utilizado por outro usuário!'
    },
    validate: {
      notEmpty: {
        msg: 'Esse campo nao pode ser vazio',
      },
      isEmail: {
        msg: 'Esse campo precisa ser um e-mail',
      },
      isUnique: function(value: string, next: NextFunction) {
        const user = User.findOne({
                      where: { email: value },
                      attributes: ['id']
                    });

        if (user != null)
          return next('Este endereço de e-mail já esta sendo utilizado por outro usuário!');

        next();
      }
    },
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Esse campo nao pode ser vazio',
      },
      len: {
        args: [3, 20],
        msg: 'Esse campo deve ter entre 3 e 20 caracteres',
      },
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Esse campo nao pode ser vazio',
      },
      len: {
        args: [8, 16],
        msg: 'Esse campo deve ter entre 8 e 16 caracteres',
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
}, {
  hooks: {
    beforeSave: (User) => {
      const salt = bcrypt.genSaltSync(8);

      const user = User.getDataValue('password');

      User.setDataValue('password', bcrypt.hashSync(user, salt));
    }
  }
});
