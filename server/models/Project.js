const Sequelize = require('sequelize')
const Paper = require('./Paper')
var db = require('../db');
// Make sure you have `postgres` running!

var Project = db.define('Project', {
  name: {
    type: Sequelize.STRING
    }
});

//Project.belongsTo(Paper, {as: 'parent'});


Project.sync({force:true}).then(() => {
  return Project.create({
    name:'initial test'
  });
});

module.exports = Project;


// projectRefs : {
//     type: Sequelize.STRING,

//   },

//   note: {
//     type: Sequelize.TEXT,
//     defaultValue: '',

//   },