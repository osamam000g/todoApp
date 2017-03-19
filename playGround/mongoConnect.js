const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err , db) => {
if(err){
 return  console.log('CONECTION err');
}
console.log('connect');
//
// db.collection('todos').insertOne({
//   text:'this is the first todo',
//   completed:'false'
// },(err , result) =>{
//   if(err){
//     return console.log('insert err '+err);
//   }
//   console.log('inset sucess'+JSON.stringify(result.ops,undefined,2));
// });
 db.collection('todos').find().toArray().then((docs) =>{
console.log(docs);
 });

db.close();
});
