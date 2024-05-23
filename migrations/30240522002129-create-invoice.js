'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Invoices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      clientNumber: {
        allowNull: true,
        type: Sequelize.STRING
      },
      referenceMonth: {
        allowNull: true,
        type: Sequelize.DATE
      },
      energyConsumption: {
        allowNull: true,
        type: Sequelize.FLOAT
      },
      energyCost: {
        allowNull: true,
        type: Sequelize.FLOAT
      },
      sceeEnergy: {
        allowNull: true,
        type: Sequelize.FLOAT
      },
      sceeCost: {
        allowNull: true,
        type: Sequelize.FLOAT
      },
      gdEnergy: {
        allowNull: true,
        type: Sequelize.FLOAT
      },
      gdCost: {
        allowNull: true,
        type: Sequelize.FLOAT
      },
      municipalTax: {
        allowNull: true,
        type: Sequelize.FLOAT
      },
      totalCost: {
        allowNull: true,
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Invoices');
  }
};