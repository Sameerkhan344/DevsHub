const express = require("express");
const { connectDB } = require("./config/db");
const User = require("./models/user");

const app = express();

const PORT = 8080;

//Create a new instance of the user model 
app.post("/signup", async (req, res) => {
    const user = new User({
        firstName: "same",
        lastName: "Khan",
        age: 20,
        gender: "male",
        emailId:"same@gmail.com",
        password:"Same123@"
    })
    try {
        await user.save();
        res.send("User added successfully");

    } catch (error) {
        res.status(400).send("User added failed", error.message);

    }
})


connectDB().then(() => {
    // console.log("databse is connectsuccesfulyyyyyy")
    app.listen(PORT, () => {
        console.log(`server is running on port ${PORT}`)
    })
})