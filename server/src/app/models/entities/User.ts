import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";
import bcrypt from "bcryptjs";
import { db } from "../../../database/db";
import IUser from "@models/interfaces/IUsers";

const sequelize = db as Sequelize;

export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> implements IUser {
  declare id: number;
  declare email: string;
  declare name: string;
  declare password: string;
  declare createdAt: Date;
  declare updatedAt: Date;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      name: "E-mail já utilizado",
      msg: "Este endereço de e-mail já esta sendo utilizado por outro usuário!",
    },
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      name: "E-mail já utilizado",
      msg: "Este endereço de e-mail já esta sendo utilizado por outro usuário!",
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Esse campo nao pode ser vazio",
      },
      len: {
        args: [8, 16],
        msg: "Esse campo deve ter entre 8 e 16 caracteres",
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
 }, { sequelize }
);

User.addHook('beforeSave', (User) => {
  const salt = bcrypt.genSaltSync(8);
  const userPassword = User.getDataValue('password');
  User.setDataValue('password', bcrypt.hashSync(userPassword, salt));
});

User.addScope('withouthPassword', {
  attributes: { exclude: ['password'] }
});

// User.prototype.validPassword = function (password: string) {
//   return bcrypt.compareSync(password, this.password);
// };

export const validatePassword = (
  resultPassword: string,
  userPassword: string
) => {
  return bcrypt.compareSync(userPassword, resultPassword);
};
