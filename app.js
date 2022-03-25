const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.set('view engine', 'ejs')
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
var items=["home work ","clg work","why work"];
app.get("/",(req,res)=>{
    res.render("index",{arr:items});
})
app.post("/",(req,res)=>{
    const item=req.body.newlis;
    items.push(item);
    res.redirect("/")
})
app.listen(12,()=>{
    console.log("your server is ready for serving")
})