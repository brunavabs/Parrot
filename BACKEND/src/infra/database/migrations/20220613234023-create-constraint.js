'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('posts', {
      fields: ['userID'],
      type: 'foreign key',
      name: 'post_user_id_fkey',
      references: {
          table: 'users',
          field: 'id'
      }   
  })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('posts', 'post_user_id_fkey')
  }
};
