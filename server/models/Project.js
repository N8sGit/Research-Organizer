const Sequelize = require('sequelize')
const Paper = require('./Paper')
var db = require('../db');
// Make sure you have `postgres` running!

var Project = db.define('Project', {
  name: {
    type: Sequelize.STRING
    },

  paperIds: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },

  note: {
    type: Sequelize.TEXT

  }



});

// Project.hasMany(Paper, {as: 'referenceArticles'});


Project.sync({force:false}).then(() => {
  return Project.create({
    name:''
  });
});

module.exports = Project;


// projectRefs : {
//     type: Sequelize.STRING,

//   },

//   
