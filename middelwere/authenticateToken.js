const dotenv =  require('dotenv');
dotenv.config();

const jwt = require('jsonwebtoken');
module.exports =function (req, res, next) {
    // if(req.headers.authorization && req.headers.authorization.startsWith('bearer'))
    // {
    //     const token = req.headers.authorization.split(' ')[1];
    //     if(token==null) res.status(401).send('Access denied');
    //     jwt.verify(token,process.env.TOKEN_KEY,(err,user)=>{
    //         if(err) res.status(403).send('Invalid token');
    //         req.user = user;
    //         // next();
    //     });
    //
    // }else
    //     res.status(401).send('Access denied');
    const token = req.headers['authorization'];
    if (!token) return res.status(401).send('Access denied');

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) return res.status(403).send('Invalid token');
        req.user = user;
        console.log("23233")
        next();
    });

}

