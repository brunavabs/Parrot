import db from "../../infra/database/index.js";
import Users from "./Users.js";
import { DataTypes } from "sequelize";

const Posts = db.define(
   "Posts",
   {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      content: {
         type: DataTypes.STRING,
      },
      createdAt: {
         type: DataTypes.DATE,
      },
      updatedAt: {
         type: DataTypes.DATE,
      },
      userID: {
         type: DataTypes.INTEGER,
         references: {
            model: Users,
            key: "id",
         },
      },
   },
   {
      tableName: "posts",
   }
);

export default Posts
