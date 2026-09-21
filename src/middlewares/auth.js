const adminAuth = (req, res, next) => {
    console.log("admin auth is checking!!");
    const token = "xyz";
    const isAuthanticate = token === "xyz";
    if (!isAuthanticate) {
        res.status(401).send("Unauthorized request!");
    } else {
        next();
    }
}
const userAuth = (req, res, next) => {
    console.log("User auth is checking!!");
    const token = "xyz";
    const isAuthanticate = token === "xyz";
    if (!isAuthanticate) {
        res.status(401).send("Unauthorized request!");
    } else {
        next();
    }
}
module.exports = {
    adminAuth,userAuth
}