const jwt = require('jsonwebtoken')
require('dotenv').config()



module.exports = (req, res, next) => {

    // this will be used in the header
    // const token = req.header("x-auth-token")
    // console.log(token)


    let token = ""
    let authorizationToken = req.header("Authorization")

    console.log(authorizationToken)





    if(!authorizationToken) {
        return res.status(401).json({message: "You are not allowed to visit this page... It is a protected route."})
    }


    // if (authorizationToken) {
    else {
        authorizationToken = authorizationToken.replace("Bearer ", "")
        console.log(authorizationToken)

        token = authorizationToken
    }

    // There is token here
    try {
        const decoded = jwt.verify(token, process.env.SECRET)

        req.user = decoded.user
        next()
    
    } catch (err) {
        return res.status(401).json({message: 'Your token is invalid'})
    }

}