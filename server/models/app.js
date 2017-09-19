const express = require('express')
const bodyParser = require('body-parser')
const db = require('./db')
const Project = require('./models/Project')
const Paper = require('./models/Paper')


const app = express()

app.use(bodyParser.json())

//a debugging feature
app.use(function(req, res, next){ 
  console.log(req.path) 
  next()
});


app.get("/", function(req, res) {
   res.sendfile('index.html')
});

app.get('/destination', function(req,res){
  res.sendfile('./build/bundle.js')
})

app.get('/api/project', function(req,res){
  let package = Project.findAll()
  package
  .then(function(content){
    res.json({
      message: 'here are your projects',
      info: content 
    });
  })
  
});

app.post('/', function(req,res){
  Project.create(req.body)
  .then(function (created) {
    res.json({
      message: 'Created successfully',
      info: created
    });
    created.save()
  })
})

// what is this app.post even doing at this point???

app.post('/api/project', function(req,res){
  let package = req.body
  res.send(package)
})

app.get('/api/paper', function(req,res){
  let package = req.body;
  res.send(package)
})

app.post('/api/paper', function(req,res){
  Paper.create(req.body)
  .then(function(create){
    res.json({
      message: "Created successfully",
      info: created 
    })
  })
})





app.listen(3000, function () {
  console.log('listening on port 3000!')
})
