module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorial", {
    productName: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    productColors: {
      type: Sequelize.STRING
    },
    productPrice: {
      type: Sequelize.STRING
    },
    productBrand: {
      type: Sequelize.STRING
    },
    productImagePath: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return Tutorial;
};
