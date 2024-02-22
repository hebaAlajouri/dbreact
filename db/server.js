const express = require("express");
const cors = require("cors");
const app = express();
 
app.use(cors());
app.use(express.json());
app.get('/',function(req,res)
{
    res.send("start server")
})
app.get('/getData',function(req,res)
{
  var data={name:"heba",age:"20",field:"SE"}
  res.json(data)
})
app.get('/getPrice',function(req,res)
{
  var data={price1:"22.3",price2:"33.1",price3:"44.1",price4:"22.5"}
  res.json(data)
})


app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});


app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});

var server=app.listen(9000,function(){

    var host= server.address().address
    var port=server.address().port
})