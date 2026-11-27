let express=require("express");
let server = express();
var port = 5000;

//api-1
server.get("/",(req,res) =>{
    res.status(200).send("I am batman");
})

//api-2
server.get("/home",(req,res) =>{
    res.status(200).send("I am batman's home");
})

//api-3
server.get("/about",(req,res) =>{
    res.status(200).send("I am batman's about");
})
//api-4
server.get("/request",(req,res) =>{
    res.status(200).send("I am batman's request");
})
//api-5
server.get("",(req,res) =>{
    res.status(200).send("I am batman");
})

server.listen(port, "0.0.0.0", () => {
    console.log(`Server running at http://localhost:${port} great`);
})