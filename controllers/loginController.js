const db = require('../DB/DBconection');
const jwt = require('jsonwebtoken');
const dotenv =  require('dotenv');
dotenv.config();


const loginController = {

    //login
    loginUser:  function (req, res, next) {
        const { user_name, password } = req.body;
        const sql = 'SELECT * FROM user_deatils WHERE user_name = ? AND password = ?';
        db.query(sql, [user_name, password], (err, results) => {
            if (err) {
                res.status(500).send('Error logging in');
            } else {
                if (results.length > 0) {
                    const token = jwt.sign({ user_name:user_name }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
                    res.status(200).json({ token });
                    // res.status(200).send('Login successful');
                } else {
                    res.status(401).send('Invalid username or password');
                }
            }
        });
    }

}


module.exports = loginController;


