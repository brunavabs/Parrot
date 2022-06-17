"use strict";

module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.bulkInsert(
         "posts",
         [
            {
              id: 1,
              content: "texto teste",
              createdAt: new Date(),
              updatedAt: new Date(),
              userID: 1
            },
            {
              id: 2,
              content: "texto teste",
              createdAt: new Date(),
              updatedAt: new Date(),
              userID: 1
            },
         ],
         {}
      );
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete("posts", null, {});
   },
};
