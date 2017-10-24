const express = require('express')
const bodyParser = require('body-parser')
const db = require('./db')
const Project = require('./models/Project')
const Paper = require('./models/Paper')
const arxiv = require('arxiv')


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
  .then(function(newPaper){
    Project.findById(req.body.projectId)
    .then(project =>{
      project.paperIds.push(newPaper.id)
      newPaper.save()
    })
    
    res.json({
      message: "newPaper created successfully",
      info: newPaper 
    })
  })
})

app.put('/api/project/:projectId', function(req,res){
  Project.findById(req.params.projectId)
    .then(project =>{
      project.note = req.body.note;
        console.log(project.note, 'project notes?')
      project.save()
      .then(result =>{
        res.json({project:project, message:'project updated'})
      })
        }).catch(error =>{
          console.log(error)
        })
})

let search_query = {
  title: '',
  author: ''
};

app.post('/api/search', function(req,res){
  search_query['title'] = req.body.title
  search_query['author'] = req.body.author
  
  arxiv.search(search_query, function(err, results) {
    console.log(results)
    console.log('Found ' + results.items.length + ' results out of ' + results.total);
    console.log(results.items[0]);
    console.log(results.items[0].authors[0].name);
    res.json(results)
  });
})

app.listen(3000, function () {
  console.log('listening on port 3000!')
})
