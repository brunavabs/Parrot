"use strict";

const senhaSindico = "MeuRei123";

module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.bulkInsert(
         "users",
         [
            {
               id: 1,
               name: "Síndico Like a Boss",
               email: "sindico@sindico.com",
               apartament: 666,
               password:
                  "$2b$10$lPivEQ9MKjoE6vWHXXPU1O9soOfYcFZXr0fWLxIc7wnk6K.cNpOzi",
               createdAt: new Date(),
               updatedAt: new Date(),
               flag: 1,
            },
         ],
         {}
      );
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete("users", null, {});
   },
};
