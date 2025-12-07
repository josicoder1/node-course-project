const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const OrderItem = sequelize.define('orderItem', {
  quantity: {
    type: Sequelize.INTEGER
  }
});

module.exports = OrderItem;
