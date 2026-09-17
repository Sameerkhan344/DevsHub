const express = require("express");

const app = express();

const PORT = 8080;


// app.use("/test", (req, res) => {
//     res.send("Hello test")
// })
// app.use("/hello/2", (req, res) => {
//     res.send("Hello hello")
// })
// app.use("/hello", (req, res) => {
//     res.send("Hello")
// })
// app.use("/", (req, res) => {
//     res.send("Hello world")
// })

app.get("/user/:userId/:name/:adddress",(req,res)=>{
    console.log(req.params)
    res.send({firstName:"sameer", lastName:"khan"})
})

// app.post("/user",(req,res)=>{
//     res.send("Data successfully save to the database!")
// })

// app.delete("/user",(req,res)=>{
//     res.send("Deleted Successfully")
// })

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})