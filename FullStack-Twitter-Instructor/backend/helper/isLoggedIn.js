const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
    const token = req.header("x-auth-token");
    console.log(token);

    if(!token){
        return res.status(401).json({ message : "Ahaaan!!! You are not allowed to view this as this is a protected route."})
    }

    try{
        const decoded = jwt.verify(token, process.env.SECRET);
        req.user = decoded.user;
        next();
    } catch(err){
        return res.status(401).json({message: "Your token is invalid."})
    }
};
