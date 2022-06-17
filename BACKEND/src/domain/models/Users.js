import db from "../../shared/infra/database/index.js";
import { DataTypes } from "sequelize";

const Users = db.define(
   "Users",
   {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      name: {
         type: DataTypes.STRING,
      },
      email: {
         type: DataTypes.STRING,
         unique: true,
      },
      apartament: {
         type: DataTypes.INTEGER,
      },
      password: {
         type: DataTypes.STRING,
      },
      createdAt: {
         type: DataTypes.DATE,
      },
      updatedAt: {
         type: DataTypes.DATE,
      },
      flag: {
         type: DataTypes.INTEGER,
      },
   },
   {
      tableName: "users",
   }
);

export default Users;
