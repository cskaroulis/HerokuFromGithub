const express = require ("express");
const app = express();

app.get("/", function(req,res){
  res.send("Hello, My Name is Colleen");
});
app.listen(process.env.PORT || 5000);
