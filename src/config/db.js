const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://khansame34_db_user:Sameerkhan123@namastenode.pt34jbk.mongodb.net/devHubs");
        console.log(`Database successfully Connected to host: ${conn.connection.host}`)
    } catch (error) {
        console.error(`[Database Error] Failed to connect to MongoDB: ${error.messagae} `)
        process.exit(1);
    }
}
module.exports = {connectDB}



// connectDB().then(()=>{
//     console.log("database connected successfully")
// })




// const mongoose = require("mongoose");

// const connectDB = async () => {
//     await mongoose.connect("mongodb+srv://khansame34_db_user:7k9OyF3K6qn8ZVnZ@cluster0.xmcp0f2.mongodb.net/")
// }
// connectDB().then(() => {
//     console.log("database connected successfully")
// }).catch((error) => {
//     console.error("database connection failed")
// })