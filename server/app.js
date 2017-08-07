let express = require('express')
let bodyParser = require('body-parser')
let db = require('./db')
const Project = require('./models/Project')



const app = express()

app.use(bodyParser.json())

app.get("/", function(req, res) {
   res.sendfile('index.html')
});

app.get('/dist/bundle.js', function(req,res){
  res.sendfile('./dist/bundle.js')
})

app.post('/api/project', function(req,res){
  let package = req.body
  res.send(package)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
