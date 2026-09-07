const express = require("express");

const app = express();

const PORT = 8080;


app.use("/test", (req, res) => {
    res.send("Hello test")
})
app.use("/hello", (req, res) => {
    res.send("Hello hello")
})
app.use("/", (req, res) => {
    res.send("Hello world")
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})