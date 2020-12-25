const calcbmi=require("express");

const bodyParser=require("body-parser");

const app =calcbmi();

app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function(req,res){
    res.sendFile(__dirname+"/bmicalc.html")
});

app.post("/",function(req,res){
     console.log(req.body); 

    let s1=Number(req.body.b1);
    let s2=Number(req.body.b2);

    let bmi=s1 / (s2*s2);
    res.send("<h1>BMI of your Body :</h1>"+bmi);


});

app.listen(7000,function(req,res){
    console.log("server is Running  localHost:7000");
});