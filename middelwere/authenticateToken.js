const dotenv =  require('dotenv');
dotenv.config();

const jwt = require('jsonwebtoken');
module.exports =function (req, res, next) {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).send('Access denied');

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) return res.status(403).send('Invalid token');
        req.user = user;
        next();
    });

}

