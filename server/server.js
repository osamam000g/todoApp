var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todos');
var {User} = require('./models/user');
const port = process.env.PORT || 3000;

var app = express();
app.use(bodyParser.json());

app.post('/todos',(req,res) => {
  // res.send(req.body);
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((docs)=>{
                       res.send(docs);
                    },(e) => {
                      res.status(400).send(e);
                    });
});

 app.get('/todos',( req, res) => {
   Todo.find().then((todos)=>{
      res.send({todos});
   },(e)=>{
     res.status(400).send(e);
   });
 });

 app.get('/todos/:id',(req,res)=>{
   if(!ObjectID.isValid(req.params.id)){
      return res.send('inValid ID');
   }
    Todo.findById(req.params.id).then((data)=>{
         res.send({data});
    },(e)=>{
      res.status(400).send(e);
    });


 });


app.listen(port,()=>{
  console.log(`server is Running on port ${port}`);
});
