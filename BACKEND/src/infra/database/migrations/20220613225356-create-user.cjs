"use strict";

module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable("users", {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
         },
         name: {
            type: Sequelize.STRING,
            allowNull: false,
         },
         email: {
            type: Sequelize.STRING,
            allowNull: false,
         },
         apartament: {
            type: Sequelize.INTEGER,
            allowNull: false,
         },
         password: {
            type: Sequelize.STRING,
            allowNull: false,
         },
         createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
         },
         updatedAt: {
            type: Sequelize.DATE,
            allowNull: false,
         },
         flag: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
            allowNull: false,
         },
      });
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.dropTable("users");
   },
};
