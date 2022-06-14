"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("posts", {
      fields: ["userID"],
      type: "foreign key",
      name: "post_user_id_fkey",
      references: {
        table: "users",
        field: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("posts", "post_user_id_fkey");
  },
};
