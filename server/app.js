let express = require('express')
let bodyParser = require('body-parser')
let db = require('./db')
const Project = require('./models/Project')



const app = express()

app.use(bodyParser.json())


app.use(function(req, res, next){ 
  console.log(req) 
  next()
});


app.get("/", function(req, res) {
   res.sendfile('index.html')
});

app.get('/destination', function(req,res){
  res.sendfile('./build/bundle.js')
})

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

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
