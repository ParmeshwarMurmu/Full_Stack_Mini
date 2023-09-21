const jwt = require('jsonwebtoken')

const auth = (req, res, next)=>{

    const token = req.headers.authorization.split(" ")[1]
    console.log(token);


    if(token){
        jwt.verify(token, 'e-commerce', async(err, decoded)=>{
           if(decoded){

            req.body.userId = decoded.userId
            req.body.userName = decoded.userName
            // bar
            next()
           }
          });
    }
    else{
        res.status(400).send({"msg": "Please Login"})
    }
}

module.exports = {
    auth
}