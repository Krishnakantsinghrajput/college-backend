
// login()
// .then(getusers)
// .then(console.log)

const { response } = require("express");

 Promise.resolve(10)
 .then((x)=>{
    return x+10;
 })
 .then((x)=>{
    console.log(x);
    return x+20;
 })
 .then(console.log);


 const fetchData=async()=>{
    console.log("started");
    await fetch()
    .then((response)=>
        response.json()
    )
    .then((json)=>
        response.json()
    )
    console.log("Ended");
 }

 console.log("Started------1")

 fetchData();
  console.log("Started------2")