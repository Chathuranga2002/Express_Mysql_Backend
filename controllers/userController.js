const db = require('../DB/DBconection');
const UserModel = require('../modle/User')

const userController = {
    // save user
    saveUser:  function (req, res, next) {
        const UserModel  = req.body;
        const sql = 'INSERT INTO user_deatils (user_name, name ,address, contact, password) VALUES (?, ?, ?, ?, ?)';
        db.query(sql, [UserModel.user_name, UserModel.name, UserModel.address, UserModel.contact, UserModel.password], (err, result) => {
            if (err) {
                res.status(500).send('Error creating user');
            } else {
                res.status(201).send('User created successfully');
                console.log(UserModel);
            }
        });
    },
    // get all user
    getAllUser:  function (req, res, next) {
        const sql = 'SELECT * FROM user_deatils';
        db.query(sql, (err, results) => {
            if (err) {
                res.status(500).send('Error fetching users');
            } else {
                res.json(results);
            }
        });

    },
    // update user
    updateUser:  function (req, res, next) {
        const UserModel  = req.body;
        const { id } = req.params;
        const sql = 'UPDATE user_deatils SET  name=? ,address=? , contact=? , password=? WHERE user_name=?';
        db.query(sql, [ UserModel.name, UserModel.address, UserModel.contact, UserModel.password ,id], (err, result) => {
            if (err) {
                res.status(500).send('Error updating user');
            } else {
                res.send('User updated successfully');
            }
        });
    },
    //delete user
    deleteUser:  function (req, res, next) {
        const { id } = req.params;
        const sql = 'DELETE FROM user_deatils WHERE user_name=?';
        db.query(sql, [id], (err, result) => {
            if (err) {
                res.status(500).send('Error deleting user');
            } else {
                res.send('User deleted successfully');
            }
        });
    },
    //login
    loginUser:  function (req, res, next) {
        const { user_name, password } = req.body;
        const sql = 'SELECT * FROM user_deatils WHERE user_name = ? AND password = ?';
        db.query(sql, [user_name, password], (err, results) => {
            if (err) {
                res.status(500).send('Error logging in');
            } else {
                if (results.length > 0) {

                    res.status(200).send('Login successful');
                } else {
                    res.status(401).send('Invalid username or password');
                }
            }
        });
    },
    // find user by  user_name
    findUser:  function (req, res, next) {
        const { id } = req.params;
        const sql = 'SELECT * FROM user_deatils WHERE user_name=?';
        db.query(sql, [id], (err, result) => {
            if (err) {
                res.status(500).send('Error finding user');
            } else if (result.length === 0) {
                res.status(404).send('User not found');
            } else {
                res.json(result[0]);
            }
        });
    }

}

module.exports = userController;
