const Sequelize = require('sequelize')
const Paper = require('./Paper')
var db = require('../db');
// Make sure you have `postgres` running!

var Project = db.define('Project', {
  name: {
    type: Sequelize.STRING,
    defaultValue:''
    },

  paperIds: {
    type: Sequelize.STRING,
    defaultValue: ''
  },

  note: {
    type: Sequelize.TEXT
  }



});



Project.sync({force:true}).then(() => {
  return Project.create({
    name:''
  });
});

module.exports = Project;

