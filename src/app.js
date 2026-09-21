const express = require("express");

const app = express();

const PORT = 8080;
const { adminAuth, userAuth } = require("./middlewares/auth")

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

// app.get("/user/:userId/:name/:adddress",(req,res)=>{
//     console.log(req.params)
//     res.send({firstName:"sameer", lastName:"khan"})
// })

// app.post("/user",(req,res)=>{
//     res.send("Data successfully save to the database!")
// })

// app.delete("/user",(req,res)=>{
//     res.send("Deleted Successfully")
// })

// app.use("/user", [(req, res, next) => {
//     console.log("req Handler routes");
//     // next();
//     res.send("Route");
// }, (req, res, next) => {
//     console.log("2nd handler route");
//     res.send("2nd route")
//     // next();
// }])

app.get("/getUserData", ( req, res) => {
    // try {
        throw new Error("sfsdfs");
        res.send("user data sent")
        
    // } catch (err) {
        res.status(500).send("something went wrong please contact support team")
    // }
})
app.use("/", (err, req, res, next) => {
  if(err){
    res.status(500).send("something went wrong")
  }
})


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})