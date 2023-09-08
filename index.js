import express from "express";
import body from "body-parser";
import ejs from "ejs";
import $ from "jquery";
const app=new express();
const port=3000;
var i=0;
// app.use(body.json());


app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
// app.use(check);
var workarray=[];
app.get("/",(req,res)=>{
    res.render("index.ejs");
})
// function check(req,res,next){
 
    
//   var checked = req.body.checked

//   if (checked == "true") {
//       console.log("true");
// } else {
//       console.log("false");
//   }
//      next();
// }

app.post("/submit",(req,res)=>{
    workarray.push(req.body["task"]);
     res.render("index.ejs",{
        array:workarray,
       
     });
    
});

app.post("/delete",(req,res)=>{
    var ind=req.body["delete-task"];
    if(ind>0&&ind<=workarray.length){
      workarray.splice(ind-1,1);
    }
    
    res.render("index.ejs",{
    array:workarray,
 });
});


app.listen(port,()=>{
  console.log("server runnig at port : "+port);
});