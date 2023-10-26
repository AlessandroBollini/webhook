const express=require("express");
const app=express();
const parseUrl = require('body-parser');
const encodeUrl = parseUrl.urlencoded({ extended: true });

const port=process.env.PORT || 3000;

let response=null;
let request=null;

app.post('/webhook/receiver',encodeUrl,(req,res)=>{
    response=res;
    request=req;
});

app.get('/req',(req,res)=>{
    res.send(request);
})

app.get('/res',(req,res)=>{
    res.send(response);
})

app.listen(port,()=>{
    console.log("App is listening on port: "+port)
})