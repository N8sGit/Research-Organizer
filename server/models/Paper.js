const Sequelize = require('sequelize')
const db = require('../db')
const Project = require('./Project')

var Paper = db.define('Paper', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },

  datePublished: {
    type: Sequelize.DATE
  },

  url: {
    type: Sequelize.STRING,
  },

  abstract: {
    type: Sequelize.TEXT
  }

  reference : {
    type: Sequelize.STRING

  }

});

Paper.belongsToMany(Project, { through: reference });

module.exports = Paper
