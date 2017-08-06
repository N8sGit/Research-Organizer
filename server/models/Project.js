const Sequelize = require('sequelize')
const Paper = require('./Paper')
console.log(Paper.reference)
var db = require('../db');
// Make sure you have `postgres` running!

var Project = db.define('Project', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },

  projectRefs : {
    type: Sequelize.STRING,

  },

  note: {
    type: Sequelize.TEXT,
    defaultValue: '',

  },

});

Project.belongsTo(Paper, {as: 'parent'});





module.exports = Project;
