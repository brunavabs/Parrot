import db from "../../infra/database/index.js";
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
   },
   {
      tableName: "users",
   }
);

export default Users;
