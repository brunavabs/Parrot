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
            {
               id: 2,
               name: "teste1",
               email: "teste1@testee.com",
               apartament: 10,
               password:
                  "$2b$10$lPivEQ9MKjoE6vWHXXPU1O9soOfYcFZXr0fWLxIc7wnk6K.cNpOzi",
               createdAt: new Date(),
               updatedAt: new Date(),
               flag: 0,
            },
            {
               id: 3,
               name: "teste2",
               email: "teste2@testee.com",
               apartament: 10,
               password:
                  "$2b$10$lPivEQ9MKjoE6vWHXXPU1O9soOfYcFZXr0fWLxIc7wnk6K.cNpOzi",
               createdAt: new Date(),
               updatedAt: new Date(),
               flag: 0,
            },
         ],
         {}
      );
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete("users", null, {});
   },
};
