const express = require("express");
const  app = express();
const port = 8080;

app.use(express.urlencoded({extended:true}));

app.get("/search",(req,res)=>{
  let {q}  = req.query;
  console.log(req.query);
  res.send(`username is request query ${q}`);
  console.log(`search result for query :  ${q}`);
})

app.post("/:username/:id", (req, res) => {
  let {username,id}=req.params;
  // let {user,password} = req.body;
  res.send(`standard post request welcome ${username} and id is ${id}`);
  console.log(`${username} and ${id}`);
  // console.log(req.body);
})

app.use((req, res) => {
  res.send({
    name: "mango",
    color: "red"
  });
})

app.listen(port,()=>{
  console.log(`app listing on ${port}`);
});