module.exports = (sequelize, DataTypes) => {
  const Invoice = sequelize.define('Invoice', {
    clientNumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    referenceMonth: {
      type: DataTypes.STRING,
      allowNull: true
    },
    energyConsumption: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    energyCost: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    sceeEnergy: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    sceeCost: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    gdEnergy: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    gdCost: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    municipalTax: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    totalCost: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  });

  return Invoice;
};
